import React, { useState, useEffect } from 'react';
import SearchBar from '../common/SearchBar';
import SearchZeroResult from './components/SearchZeroResult';
import SearchExistResultList from './components/SearchExistResultList';

const SearchScreen = () => {
    const [pressSearchBtn, setPressSearchBtn] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [isSearchResultChanged, setIsSearchResultChanged] = useState(false);

    useEffect(() => {
        setSearchResult(searchResult); // update list
    }, [isSearchResultChanged]);

    return (
        <>
            <SearchBar 
                isSearchScreen={true}
                pressSearchBtn={pressSearchBtn}
                setPressSearchBtn={setPressSearchBtn}
                placeholderContext="티끌 제목 혹은 #태그를 입력하세요."
                searchResult={searchResult}
                setSearchResult={setSearchResult}
                isSearchResultChanged={isSearchResultChanged}
                setIsSearchResultChanged={setIsSearchResultChanged} />
            {pressSearchBtn
                ? (searchResult.length > 0 
                    ? <SearchExistResultList isGroupDetail={false} searchResult={searchResult} />
                    : <SearchZeroResult />)
                : <SearchZeroResult />}
        </>
    );
};

export default SearchScreen;
