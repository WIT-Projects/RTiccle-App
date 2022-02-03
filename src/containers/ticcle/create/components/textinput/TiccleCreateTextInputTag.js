import React,{useState} from 'react'
import { TextInput, StyleSheet,View } from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import colors from '../../../../../theme/colors'

const TiccleCreateTextInputTag = ({scrollRef, setTiccleTagList}) => {
    const placeholder = "태그 ex. #경제 #마케팅 (선택)"
    const [tag, setTag] = useState('');
    const initialTag = () => {
        setTag('')
    }
    const pressEnter = () => {
        setTiccleTagList(tag);
        scrollRef.current.scrollToEnd();
        initialTag();
    }

    useEffect(() => {
        let lastChar = tag.substring(tag.length-1);
        if(lastChar === ' ') { 
            setTiccleTagList(tag);
            scrollRef.current.scrollToEnd();
        initialTag();
        }
    }, [tag]);

    return (
        <View style={styles.container}>
            <TextInput
            placeholder = {placeholder}
            placeholderTextColor = {colors.gray3}
            onChangeText = {setTag}
            value= {tag}
            onSubmitEditing={pressEnter}
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
