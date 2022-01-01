import React, {useState} from 'react'
import { TextInput, StyleSheet,View } from 'react-native'

import colors from '../../../../theme/colors'

const TiccleCreateTextInput = ({fontWeight, fontSize, placeHolderTextcolor, placeholder, onChangeText, style}) => {

    return (
        <View style={[styles.container, style]}>
            <TextInput
            placeholder = {placeholder}
            placeholderTextColor = {placeHolderTextcolor}
            onChangeText = {onChangeText}
            returnKeyType='next'
            style={{
                fontWeight : fontWeight,
                fontSize: fontSize,
                color : colors.main,
                }}>
            </TextInput>
        </View>

    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        borderBottomColor : colors.gray1,
        borderBottomWidth : 1,
        height : 59,
    },
    textInput : {
        fontWeight : 'bold',
    }
})

export default TiccleCreateTextInput
