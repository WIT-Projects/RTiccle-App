import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import useTiccleCreate from '../../../../../context/hook/useTiccleCreate';
import colors from '../../../../../theme/colors';

const TiccleContentTextInput = ({ticcleContent, setTiccleContent}) => {
    const value = ticcleContent
    
    return(
        <View style={styles.container}>
            <TextInput style={styles.textinput}
            multiline ={true}
            textAlignVertical = "top"
            placeholder = "내용을 입력하세요"
            placeholderTextColor = {colors.gray3}
            onChangeText = {setTiccleContent}
            value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 16,
    },
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
