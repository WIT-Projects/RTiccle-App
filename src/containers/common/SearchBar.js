import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image } from "react-native";
import { searchTiccleByTitltAndTag } from '../../model/SearchModel';
import colors from '../../theme/colors';

const SearchBar = ({ placeholderContext, setExistResult, setPressSearchBtn, pressSearchBtn }) => {
    const [searchInput, setSearchInput] = useState("");

    function getSearchResult(){
        let query = searchInput.split(" ");
        let tagQuery = [];
        query.map((item) => {
            item.search("#") !==-1 ? tagQuery.push(item.replace('#','')) : null
        })
        searchTiccleByTitltAndTag(query, tagQuery, setExistResult);
        setPressSearchBtn(true);
    }
    
    const pressDeleteSearchBtn = (e) =>{
        setSearchInput('');
        setPressSearchBtn(false); 
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.textInput} value={searchInput} onChangeText={(text) => setSearchInput(text)} placeholder={placeholderContext}></TextInput>
                {pressSearchBtn? <Image source={require('../../assets/icon/deleteSearch.png')} onTouchEnd={() => pressDeleteSearchBtn()}/> : null}
                <Image onTouchEnd={() => {getSearchResult()}} style={styles.icon} source={require('../../assets/icon/search.png')}></Image>
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
    icon:{
        marginLeft: 18,
    }
})

export default SearchBar;
