import React, { useState } from 'react';
import {StyleSheet, TextInput , View, Image} from "react-native";
import colors from '../../theme/colors';

const  SearchBar = ({placeholderContext}) => {
    const [searchInput, onSearchInput] = useState("");

  return(
    <>
        <View style={styles.container}>
            <TextInput style={styles.textInput} onChangeText={onSearchInput} placeholder={placeholderContext}></TextInput>
            <Image style={styles.icon} source={require('../../assets/icon/search.png')}></Image>
            <Image style={styles.icon} source={require('../../assets/icon/line.png')}></Image>
            <Image style={styles.icon} source={require('../../assets/icon/menu.png')}></Image>
        </View> 
    </>
  )
}

const styles = StyleSheet.create({
    textInput:{
        fontSize: 18,
        width:"75%",
    },
    container:{
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderBottomColor: colors.gray2,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default SearchBar;
