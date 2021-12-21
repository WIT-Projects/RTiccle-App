import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

import colors from '../../../../theme/colors';

const TiccleContentTextInput = ({onChangeText}) => {
    return(
        <>
            <TextInput style={styles.textinput}
            multiline ={true}
            textAlignVertical = "top"
            placeholder = "내용을 입력하세요"
            placeholderTextColor = {colors.gray3}
            onChangeText = {onChangeText}
            />
        </>
    )
}

const styles = StyleSheet.create({
    textinput : {
        backgroundColor : colors.gray6,
        minHeight: 350,
        borderRadius : 16,
        paddingHorizontal : 18,
        paddingTop : 18,
        fontSize : 16,
    }
})


export default TiccleContentTextInput
