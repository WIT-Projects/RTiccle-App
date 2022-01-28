import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';
import { groupList } from '../../../model/GroupModel';

const SearchExistResult = ({ ticcle }) => {
    function getTitle() {
        const idx = groupList.findIndex(obj => obj.id === ticcle.groupId);
        return groupList[idx].title;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.groupFont}>{getTitle(ticcle.groupId)}</Text>
            <Text style={styles.titleFont}>{ticcle.title}</Text>
            <View style={styles.tagContainer}>
                {ticcle.tagList.map((item, index) => { return (<Text style={styles.tagFont} key={index}>#{item} </Text>) })}
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
});

export default SearchExistResult;
