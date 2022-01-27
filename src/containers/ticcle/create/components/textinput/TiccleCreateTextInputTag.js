import React,{useState} from 'react'
import { TextInput, StyleSheet,View } from 'react-native'
import colors from '../../../../../theme/colors'

const TiccleCreateTextInputTag = ({scrollRef, setTiccleTagList}) => {
    const placeholder = "태그 ex. #경제 #마케팅 (선택)"
    const [tag, setTag] = useState('');
    const initialTag = () => {
        setTag('')
    }
    const pressEnter = () => {
        scrollRef.current.scrollToEnd();
    }

    return (
        <View style={styles.container}>
            <TextInput
            placeholder = {placeholder}
            placeholderTextColor = {colors.gray3}
            onChangeText = {setTag}
            value= {tag}
            onSubmitEditing={() => {
                setTiccleTagList(tag);
                pressEnter();
                initialTag();
            }}
            blurOnSubmit={false}
            style={styles.textInput}
            >
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
        fontWeight : 'normal',
        fontSize: 18,
        color: colors.main
    }
})

export default TiccleCreateTextInputTag
