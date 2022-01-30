import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';
import { groupList } from '../../../model/GroupModel';
import { ticcleList } from '../../../model/TiccleModel';
import { useNavigation } from '@react-navigation/native';
import { timeStampToFormatDate } from '../../../service/CommonService';
import { findTiccleById } from '../../../service/TiccleService';

const SearchExistResult = ({ ticcle, isGroupDetail }) => {
    const navigateTo = useNavigation();
    let ticcleData = getTiccle();
    const [ticcleDate, setTiccleDate] = useState('');

    function getTiccle(){
        if(isGroupDetail === true){
            const idx = ticcleList.findIndex(obj => obj.id === ticcle.id);
            ticcleData = ticcleList[idx];
            setTiccleDate(timeStampToFormatDate(ticcleData.lastModifiedTime));
        }else{
            getTiccleByServer(ticcle.id).catch(
                err => handleError(err)
            );
        }
    }

    function getGroupTitle() {
        const idx = groupList.findIndex(obj => obj.id === ticcle.groupId);
        return groupList[idx].title;
    }

    async function getTiccleByServer(ticcleId) {
        const result = await findTiccleById(ticcleId);
        ticcleData = result;
        setTiccleDate(timeStampToFormatDate(ticcleData.lastModifiedTime));
    }

    const goToTiccleDetail = () => {
        navigateTo.navigate('TiccleDetail', { ticcleData: ticcleData });
    }

    return (
        <View style={styles.container} onTouchEnd={goToTiccleDetail}>
            <Text style={styles.dateFont}>{ticcleDate}</Text>
            <View style={styles.container2}>
                <Text style={styles.groupFont}>{getGroupTitle(ticcle.groupId)}</Text>
                <Text style={styles.titleFont}>{ticcle.title}</Text>
                <View style={styles.tagContainer}>
                    {ticcle.tagList.map((item, index) => { return (<Text style={styles.tagFont} key={index}>#{item} </Text>) })}
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
});

export default SearchExistResult;
