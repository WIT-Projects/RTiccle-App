import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import ExistResult from './ExistResult';
import { type } from '../../../theme/fonts';

const ExistResultList = () => {
    const resultList = [
        { ticcleType: 1, title: "화산귀환", tag: ["데못죽", "회차"], group: "무협" },
        { ticcleType: 1, title: "화산귀환", tag: ["데못죽", "회차"], group: "무협" },
        { ticcleType: 1, title: "화산귀환", tag: ["데못죽", "회차"], group: "무협" },
        { ticcleType: 1, title: "화산귀환", tag: ["데못죽", "회차"], group: "무협" },
        { ticcleType: 1, title: "화산귀환", tag: ["데못죽", "회차"], group: "무협" },
        { ticcleType: 1, title: "화산귀환", tag: ["데못죽", "회차"], group: "무협" },
    ]
    return (
        <>
            <Text style={styles.resultText}>총 {resultList.length}개의 검색결과</Text>
            <ScrollView>
                {resultList.map((item, index) => {
                    return (<ExistResult key={index} ticcleType={item.ticcleType} title={item.title} tag={item.tag} group={item.group} />)
                })}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    resultText: {
        marginLeft: 22,
        marginTop: 26,
        marginBottom: 14,
        fontFamily: type.spoqaHanSansNeo_Medium,
        fontSize: 18,
    }
});

export default ExistResultList;
