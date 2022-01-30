import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import SearchZeroResult from './components/SearchZeroResult';
import SearchExistResultList from './components/SearchExistResultList';

const SearchScreen = () => {
    const [pressSearchBtn, setPressSearchBtn] = useState(false);
    const [existResult, setExistResult] = useState(false);

    return (
        <>
            <SearchBar isSearchScreen={true} setPressSearchBtn={setPressSearchBtn} setExistResult = {setExistResult} placeholderContext="제목, #태그 등을 입력하세요." />
            {existResult ? <SearchExistResultList isGroupDetail={false} /> : <SearchZeroResult />}
        </>
    );
};

export default SearchScreen;
