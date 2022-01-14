import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';
import { useNavigation } from '@react-navigation/native';

const GroupDetailTiccle = ({ ticcleDate, title, tag }) => {
    const navigateTo = useNavigation();

    return (
        <View style={styles.container} onTouchEnd={() => navigateTo.navigate('TiccleDetail')}>
            <Text style={styles.font1}>{ticcleDate}</Text>
            <View style={styles.container2}>
                <Text style={styles.font2}>{title}</Text>
                <View style={styles.container3}>
                    {tag.map((item, index) => { return (<Text style={styles.font3} key={index}>#{item} </Text>) })}
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
