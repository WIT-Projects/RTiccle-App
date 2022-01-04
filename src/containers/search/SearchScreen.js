import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import TypeBar from './components/TypeBar';
import ZeroResult from './components/ZeroResult';
import ExistResultList from './components/ExistResultList';

const SearchScreen = () => {
    const [existResult, setExistResult] = useState(true);

    return (
        <>
            <SearchBar placeholderContext="제목, #태그 등을 입력하세요." />
            <TypeBar />
            {existResult ? <ExistResultList /> : <ZeroResult />}
        </>
    );
};

export default SearchScreen;
