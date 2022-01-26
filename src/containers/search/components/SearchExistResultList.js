import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchExistResult from './SearchExistResult';
import { type } from '../../../theme/fonts';
import { searchList } from '../../../model/SearchModel';

const SearchExistResultList = (isGroupDetail) => {
    return (
        <>
            {isGroupDetail? null : <Text style={styles.resultText}>총 {searchList.length}개의 검색결과</Text>}
            <ScrollView>
                {searchList.map((item, index) => {
                    return (<SearchExistResult key={index} ticcle={item} />)
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
