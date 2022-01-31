import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchExistResult from './SearchExistResult';
import { type } from '../../../theme/fonts';

const SearchExistResultList = ({isGroupDetail, searchResult}) => {
    return (
        <>
            {isGroupDetail? null : <Text style={styles.resultText}>총 {searchResult.length}개의 검색결과</Text>}
            <ScrollView>
                {searchResult.map((item, index) => {
                    return (<SearchExistResult key={index} ticcle={item} isGroupDetail={isGroupDetail} />)
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

export default SearchExistResultList;
