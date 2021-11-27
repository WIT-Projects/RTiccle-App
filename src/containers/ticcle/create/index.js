import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import TiccleCreateTextInput from './components/ticcleCreateTextInput';
import TiccleImageCreateButton from './components/ticcleImageCreateButton';
import TiccleContentTextInput from './components/ticcleContentTextInput';

import colors from '../../../theme/colors';


const TiccleCreate = () => {

    const [ticcleCreateText, setTiccleCreateText] = useState({
        title: "",
        link: "",
        tag : "",
        content : "",
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

    const setContent = (text) => {
        setTiccleCreateText(state => {return { ...state, content: text}})
    }

    return(
        <View style={styles.container}>
            <View style={styles.textinputContainer}>
                <TiccleCreateTextInput
                fontSize={24} fontWeight={'bold'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"제목"} onChangeText={setTextTitle}
                />
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"URL 링크"} onChangeText={setLink}/>
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"태그 ex. #경제 #마케팅"} onChangeText={setTag}/>
            </View>

            <View style={styles.imageCreateButtonContainer}>
                <TiccleImageCreateButton/>
            </View>

            <View style={styles. ticcleContentContainer}>
                <TiccleContentTextInput onChangeText ={setContent}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : colors.white,
        paddingHorizontal : 18
    },
    textinputContainer: {
        marginTop : 6,
    },
    imageCreateButtonContainer: {
        marginTop : 16,
    },
    ticcleContentContainer: {
        marginTop: 16,
    }
})

export default TiccleCreate