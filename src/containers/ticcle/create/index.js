import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import TiccleCreateTextInput from './components/ticcleCreateTextInput';

import colors from '../../../theme/colors';


const TiccleCreate = () => {

    const [ticcleCreateText, setTiccleCreateText] = useState({
        title: "",
        link: "",
        tag : "",
    })

    const setTextTitle = (text) => {
        setTiccleCreateText(state => {return {...state, title: text}})
    }

    const setLink = (text) => {
        setTiccleCreateText(state => {return {...state, link: text}})
    }

    const setTag = (text) => {
        setTiccleCreateText(state => {return {...state, tag: text}})
    }

    return(
        <View style={styles.container}>
            <View style={styles.textinputContainer}>
                <TiccleCreateTextInput
                fontSize={24} fontWeight={'bold'} color ={colors.gray3}
                placeholder ={"제목"} onChangeText={setTextTitle}
                />
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} color ={colors.gray3}
                placeholder ={"URL 링크"} onChangeText={setLink}/>
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} color ={colors.gray3}
                placeholder ={"태그 ex. #경제 #마케팅"} onChangeText={setTag}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 18
    },
    textinputContainer : {
        marginTop : 6,
    }
})

export default TiccleCreate