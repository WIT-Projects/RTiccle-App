import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import SearchBar from '../common/SearchBar';

const SearchScreen = () => {
    return (
        <>
            <SearchBar placeholderContext="제목, #태그 등을 입력하세요."/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
});

export default SearchScreen;
