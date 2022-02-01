import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import SearchZeroResult from './components/SearchZeroResult';
import SearchExistResultList from './components/SearchExistResultList';

const SearchScreen = () => {
    const [pressSearchBtn, setPressSearchBtn] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    return (
        <>
            <SearchBar 
                isSearchScreen={true}
                pressSearchBtn={pressSearchBtn}
                setPressSearchBtn={setPressSearchBtn}
                placeholderContext="티끌 제목 혹은 #태그를 입력하세요."
                searchResult={searchResult}
                setSearchResult={setSearchResult} />
            {pressSearchBtn
                ? (searchResult.length > 0 
                    ? <SearchExistResultList isGroupDetail={false} searchResult={searchResult} />
                    : <SearchZeroResult />)
                : <SearchZeroResult />}
        </>
    );
};

export default SearchScreen;
