import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity } from "react-native";
import { searchTiccleByTitltAndTag, searchTiccleByTitltAndTagInGroup } from '../../model/SearchModel';
import { ticcleList } from '../../model/TiccleModel';
import { useErrorHandler } from 'react-error-boundary';
import SearchModal from './SearchModal';
import { sortAscByLMT, sortDescByLMT } from '../../model/TiccleModel';
import colors from '../../theme/colors';

const SearchBar = ({ isSearchScreen, placeholderContext, setPressSearchBtn, pressSearchBtn, setSearchResult, searchResult, list, setList,setIsLoading, isLatestSort, setIsLatestSort }) => {
    const [searchInput, setSearchInput] = useState("");
    const handleError = useErrorHandler() // for error handling
    const [isModalVisible, setModalVisible] = useState(false);
    const [isListChanged, setIsListChanged] = useState(false);

    useEffect(() => {
        if (searchResult.length != 0) {
            let sortResult = isLatestSort ? sortDescByLMT(searchResult) : sortAscByLMT(searchResult);
            let JSONSortResult = JSON.parse(JSON.stringify(sortResult));
            setSearchResult(JSONSortResult);
        }
        if (!isSearchScreen) {
            let sortResult = isLatestSort ? sortDescByLMT(list) : sortAscByLMT(list);
            let JSONSortResult = JSON.parse(JSON.stringify(sortResult));
            setList(JSONSortResult);
        }
    }, [isListChanged]);

    function getSearchResult() {
        let query = searchInput.split(" ");
        let tagQuery = [];
        query.map((item) => {
            item.search("#") !== -1 ? tagQuery.push(item.replace('#', '')) : null
        });
        setIsLoading(true);
      
        if (isSearchScreen) {
            searchTiccleByTitltAndTag(query, tagQuery)
                .then((res) => {
                    let sortResult = isLatestSort ? sortDescByLMT(res) : sortAscByLMT(res);
                    setSearchResult(sortResult);
                    setIsLoading(false);
                })
                .catch(err => handleError(err))
        } else {
            const result = searchTiccleByTitltAndTagInGroup(ticcleList, query, tagQuery);
            let sortResult = isLatestSort ? sortDescByLMT(result) : sortAscByLMT(result);
            setSearchResult(sortResult);
            setIsLoading(false);
        }
        setPressSearchBtn(true);
    }

    const pressDeleteSearchBtn = () => {
        setSearchInput('');
        setPressSearchBtn(false);
    };

    const sortLatest = () => {
        setIsLatestSort(true);
        setModalVisible(false);
        setIsListChanged(!isListChanged);
    };

    const sortOld = () => {
        setIsLatestSort(false);
        setModalVisible(false);
        setIsListChanged(!isListChanged);
    };

    return (
        <>
            <SearchModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                option1Function={sortLatest}
                option2Function={sortOld}
                isLatestSort={isLatestSort}
                setIsLatestSort={setIsLatestSort}
                top={isSearchScreen ? 56 : 316}
                right={10}
            />
            <View style={styles.container}>
                <TextInput style={styles.textInput} value={searchInput} onChangeText={(text) => setSearchInput(text)} placeholder={placeholderContext}></TextInput>
                {pressSearchBtn ? <Image source={require('../../assets/icon/deleteSearch.png')} onTouchEnd={() => pressDeleteSearchBtn()} /> : <View style={{width: 19}}/>}
                <Image onTouchEnd={() => { getSearchResult() }} style={styles.icon} source={require('../../assets/icon/search.png')}></Image>
                <Image style={styles.icon} source={require('../../assets/icon/line.png')}></Image>
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true);
                    }}>
                    <Image style={styles.icon} source={require('../../assets/icon/menu.png')}></Image>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 16,
        width: "70%",
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderBottomColor: colors.gray2,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
    },
    icon: {
        marginLeft: 18,
    }
})

export default SearchBar;
