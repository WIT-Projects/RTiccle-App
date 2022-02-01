import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity } from "react-native";
import { searchTiccleByTitltAndTag, searchTiccleByTitltAndTagInGroup } from '../../model/SearchModel';
import { ticcleList } from '../../model/TiccleModel';
import { useErrorHandler } from 'react-error-boundary';
import SearchModal from './SearchModal';
import { sortAscByLMT, sortDescByLMT } from '../../model/TiccleModel';
import colors from '../../theme/colors';

const SearchBar = ({ isSearchScreen, placeholderContext, setPressSearchBtn, pressSearchBtn, setSearchResult, searchResult, list, setList }) => {
    const [searchInput, setSearchInput] = useState("");
    const handleError = useErrorHandler() // for error handling
    const [isModalVisible, setModalVisible] = useState(false);
    const [isLatestSort, setIsLatestSort] = useState(true);

    function getSearchResult() {
        let query = searchInput.split(" ");
        let tagQuery = [];
        query.map((item) => {
            item.search("#") !== -1 ? tagQuery.push(item.replace('#', '')) : null
        });
        console.log("태그:" + tagQuery);

        if (isSearchScreen) {
            searchTiccleByTitltAndTag(query, tagQuery)
                .then((res) => {
                    isLatestSort ? setSearchResult(sortDescByLMT(res)) : setSearchResult(sortAscByLMT(res));
                })
                .catch(err => handleError(err))
        } else {
            const result = searchTiccleByTitltAndTagInGroup(ticcleList, query, tagQuery);
            isLatestSort ? setSearchResult(sortDescByLMT(result)) : setSearchResult(sortAscByLMT(result));
        }
        setPressSearchBtn(true);
    }

    const pressDeleteSearchBtn = () => {
        setSearchInput('');
        setPressSearchBtn(false);
    };

    const sortLatest = () => {
        setIsLatestSort(true);
        if (searchResult.length != 0) {
            setSearchResult(sortDescByLMT(searchResult));
        }
        if (!isSearchScreen) {
            setList(sortDescByLMT(list));
        }
        setModalVisible(false);
    };

    const sortOld = () => {
        setIsLatestSort(false);
        if (searchResult.length != 0) {
            setSearchResult(sortAscByLMT(searchResult));
        }
        if (!isSearchScreen) {
            setList(sortAscByLMT(list));
        }
        setModalVisible(false);
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
                {pressSearchBtn ? <Image source={require('../../assets/icon/deleteSearch.png')} onTouchEnd={() => pressDeleteSearchBtn()} /> : null}
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
        fontSize: 18,
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
