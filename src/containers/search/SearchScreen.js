import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import SearchZeroResult from './components/SearchZeroResult';
import SearchExistResultList from './components/SearchExistResultList';
import Spinner from '../common/Spinner';
import SearchNotExistTiccle from './components/SearchNotExistTiccle';

const SearchScreen = () => {
    const [pressSearchBtn, setPressSearchBtn] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLatestSort, setIsLatestSort] = useState(true);
    const [isFirstComeIn, setIsFirstComeIn] = useState(true);
    
    return (
        <>
            { isLoading && <Spinner></Spinner> }        
            <SearchBar 
                isSearchScreen={true}
                pressSearchBtn={pressSearchBtn}
                setPressSearchBtn={setPressSearchBtn}
                placeholderContext="티끌 제목 혹은 #태그를 입력하세요."
                searchResult={searchResult}
                setSearchResult={setSearchResult}
                setIsLoading={setIsLoading}
                isLatestSort={isLatestSort}
                setIsLatestSort={setIsLatestSort}
                setIsFirstComeIn={setIsFirstComeIn}
            />
            {pressSearchBtn
                ? (searchResult.length > 0 
                    ? <SearchExistResultList isGroupDetail={false} searchResult={searchResult} setSearchResult={setSearchResult} />
                    : isFirstComeIn? <SearchZeroResult/>: <SearchNotExistTiccle/>)
                : <SearchZeroResult />}
        </>
    );
};

export default SearchScreen;
