import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';

const ExistResult = ({ ticcleType, title, tag, group }) => {
    const typeList = ["책", "블로그", "뉴스기사", "연재물", "SNS", "기타"];

    return (
        <View style={styles.container}>
            <View style={styles.container4}>
                <Text style={styles.typeBox}>{typeList[ticcleType]}</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.groupFont}>{group}</Text>
                <Text style={styles.titleFont}>{title}</Text>
                <View style={styles.container3}>
                    {tag.map((item, index) => { return (<Text style={styles.tagFont} key={index}>#{item} </Text>) })}
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
    container4: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    typeBox: {
        fontSize: 12,
        color: colors.main,
        fontFamily: type.spoqaHanSansNeo_Medium,
        backgroundColor: colors.sub,
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 14,
        marginLeft: 18,
        marginTop: 14,
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

export default ExistResult;
