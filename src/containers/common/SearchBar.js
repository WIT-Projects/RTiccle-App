import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image } from "react-native";
import { searchTiccleByTitltAndTag, searchTiccleByTitltAndTagInGroup} from '../../model/SearchModel';
import colors from '../../theme/colors';
import { ticcleList } from '../../model/TiccleModel';

const SearchBar = ({ isSearchScreen, placeholderContext, setPressSearchBtn, pressSearchBtn, setSearchResult }) => {
    const [searchInput, setSearchInput] = useState("");

    function getSearchResult() {
        let query = searchInput.split(" ");
        let tagQuery = [];
        query.map((item) => {
            item.search("#") !== -1 ? tagQuery.push(item.replace('#', '')) : null
        });
        console.log("태그:"+tagQuery);

        if (isSearchScreen) {
            searchTiccleByTitltAndTag(query,tagQuery)
                .then((res) => setSearchResult(res));
        } else {
            const result = searchTiccleByTitltAndTagInGroup(ticcleList, query, tagQuery);
            setSearchResult(result);
        }
        setPressSearchBtn(true);
    }

    const pressDeleteSearchBtn = () => {
        setSearchInput('');
        setPressSearchBtn(false);
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.textInput} value={searchInput} onChangeText={(text) => setSearchInput(text)} placeholder={placeholderContext}></TextInput>
                {pressSearchBtn ? <Image source={require('../../assets/icon/deleteSearch.png')} onTouchEnd={() => pressDeleteSearchBtn()} /> : null}
                <Image onTouchEnd={() => { getSearchResult() }} style={styles.icon} source={require('../../assets/icon/search.png')}></Image>
                <Image style={styles.icon} source={require('../../assets/icon/line.png')}></Image>
                <Image style={styles.icon} source={require('../../assets/icon/menu.png')}></Image>
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
    },
    icon: {
        marginLeft: 18,
    }
})

export default SearchBar;
