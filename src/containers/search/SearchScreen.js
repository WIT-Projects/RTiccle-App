import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import TypeBar from './components/TypeBar';
import SearchZeroResult from './components/SearchZeroResult';
import SearchExistResultList from './components/SearchExistResultList';

const SearchScreen = () => {
    const [existResult, setExistResult] = useState(true);

    return (
        <>
            <SearchBar placeholderContext="제목, #태그 등을 입력하세요." />
            <TypeBar />
            {existResult ? <SearchExistResultList /> : <SearchZeroResult />}
        </>
    );
};

export default SearchScreen;
