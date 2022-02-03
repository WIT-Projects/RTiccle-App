import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';
import { useNavigation } from '@react-navigation/native';
import { timeStampToFormatDate } from '../../../../service/CommonService';

const GroupDetailTiccle = ({ item }) => {
    const navigateTo = useNavigation();
    const [availableTag, setAvailableTag] = useState([]);

    let ticcleDate = timeStampToFormatDate(item.lastModifiedTime);
    const title = item.title
    const tag = item.tagList

    useEffect(() => {
        let lengthSum = 0;
        let availableIndex = 0;
        tag.map((item) => {
            lengthSum += item.length;
            if(lengthSum < 24) {
                availableIndex++;
            }
        })
        const newTag = tag.slice(0, availableIndex);
        setAvailableTag(newTag);
    },[item])



    const goToTiccleDetail = () => {
        navigateTo.navigate('TiccleDetail', {ticcleData: item, goBack: true});
    }
    return (
        <View style={styles.container} onTouchEnd={goToTiccleDetail}>
            <Text style={styles.font1}>{ticcleDate}</Text>
            <View style={styles.container2}>
                <Text style={styles.font2}>{title}</Text>
                <View style={styles.container3}>
                    {availableTag.map((item, index) => {
                            return (
                                <Text style={styles.font3} key={index}>
                                    #{item + '  '}
                                </Text>
                            )}                               
                    )}
                    {(availableTag.length !== tag.length)
                    ?
                    <Text style={styles.font3}>...</Text>
                    : null
                    }           
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        backgroundColor: colors.main,
        borderBottomWidth: 1,
        borderColor: colors.white,
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
        flexDirection: 'row',
        alignItems : 'center',
        maxWidth: '75%',
    },
    font1: {
        fontSize: 12,
        color: colors.white,
        marginLeft: 18,
        marginTop: 13,
        marginBottom: 21,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
    font2: {
        fontSize: 16,
        color: colors.white,
        marginBottom: 6,
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    font3: {
        fontSize: 12,
        color: colors.sub,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
})

export default GroupDetailTiccle;
