import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';
import { groupList } from '../../../model/GroupModel';
import { ticcleList } from '../../../model/TiccleModel';
import { useNavigation } from '@react-navigation/native';
import { timeStampToFormatDate } from '../../../service/CommonService';
import { findTiccleById } from '../../../service/TiccleService';
import { useErrorHandler } from 'react-error-boundary'

const SearchExistResult = ({ ticcle, isGroupDetail }) => {
    const navigateTo = useNavigation();
    const [ticcleData, setTiccleData] = useState({});
    const [availableTag, setAvailableTag] = useState([]);
    const handleError = useErrorHandler() // for error handling
    const tag = ticcle.tagList

    useEffect(() => {
        if (isGroupDetail === true){
            const idx = ticcleList.findIndex(obj => obj.id === ticcle.id);
            setTiccleData(ticcleList[idx]);
        } else{
            getTiccleByServer(ticcle.id).catch(
                err => handleError(err)
            );
        }
    }, [ticcle])

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
    },[ticcle])

    function getGroupTitle() {
        const idx = groupList.findIndex(obj => obj.id === ticcle.groupId);
        return groupList[idx].title;
    }

    async function getTiccleByServer(ticcleId) {
        const result = await findTiccleById(ticcleId);
        setTiccleData(result);
    }

    const goToTiccleDetail = () => {
        navigateTo.navigate('TiccleDetail', { ticcleData: ticcleData, goBack : true });
    }

    return (
        <View style={styles.container} onTouchEnd={goToTiccleDetail}>
            <Text style={styles.dateFont}>{timeStampToFormatDate(ticcle.lastModifiedTime)}</Text>
            <View style={styles.container2}>
                <Text style={styles.groupFont}>{getGroupTitle(ticcle.groupId)}</Text>
                <Text style={styles.titleFont}>{ticcle.title}</Text>
                <View style={styles.tagContainer}>
                    {availableTag.map((item, index) => {
                        return (<Text style={styles.tagFont} key={index}>#{item + '  '}</Text>)
                        })}
                    {(availableTag.length !== tag.length)
                    ?
                    <Text style={styles.fontEllipsis}>...</Text>
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
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '75%',
    },
    titleFont: {
        fontSize: 16,
        color: colors.white,
        marginVertical: 6,
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    tagFont: {
        fontSize: 12,
        color: colors.sub,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
    groupFont: {
        fontSize: 12,
        color: colors.white,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
    dateFont: {
        fontSize: 12,
        color: colors.white,
        marginLeft: 18,
        marginTop: 13,
        marginBottom: 10,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
    fontEllipsis:{
        fontSize: 12,
        color: colors.sub,
        fontFamily: type.spoqaHanSansNeo_Regular,
    }
});

export default SearchExistResult;
