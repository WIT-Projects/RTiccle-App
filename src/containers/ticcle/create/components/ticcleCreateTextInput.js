import React, {useState} from 'react'
import { TextInput, StyleSheet,View } from 'react-native'

import colors from '../../../../theme/colors'

const TiccleCreateTextInput = ({fontWeight, fontSize, color, placeholder, onChangeText}) => {

    return (
        <View style={styles.container}>
            <TextInput
            placeholder = {placeholder}
            onChangeText = {onChangeText}
            style={{
                fontWeight : fontWeight,
                fontSize: fontSize,
                color : color
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