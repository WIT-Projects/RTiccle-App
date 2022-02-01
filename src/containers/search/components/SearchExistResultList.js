import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchExistResult from './SearchExistResult';
import { type } from '../../../theme/fonts';
import colors from '../../../theme/colors';

const SearchExistResultList = ({isGroupDetail, searchResult}) => {
    return (
        <>
            {isGroupDetail? null : <Text style={styles.resultText}>총 {searchResult.length}개의 검색결과</Text>}
            <ScrollView style={styles.container}>
                {searchResult.map((item, index) => {
                    return (<SearchExistResult key={index} ticcle={item} isGroupDetail={isGroupDetail} />)
                })}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    resultText: {
        paddingLeft: 22,
        paddingTop: 26,
        paddingBottom: 14,
        fontFamily: type.spoqaHanSansNeo_Medium,
        fontSize: 18,
        backgroundColor: colors.white,
    },
    container:{
        backgroundColor: colors.white,
    },
});

export default SearchExistResultList;
