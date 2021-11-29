import React from 'react';
import { View, StyleSheet } from 'react-native';

import TiccleCreateTextInput from '../components/ticcleCreateTextInput';
import colors from '../../../../theme/colors';

import useTiccleCreateText from '../../../../context/hook/useTiccleCreateText';

const TiccleCreateTextInputGroup = () => {

    const {setTitle, setLink, setTag} = useTiccleCreateText();

    return(
        <View style={styles.container}>
                <TiccleCreateTextInput
                fontSize={24} fontWeight={'bold'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"제목"} onChangeText={setTitle}
                />
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"URL 링크"} onChangeText={setLink}/>
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"태그 ex. #경제 #마케팅"} onChangeText={setTag}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop : 6,
    }
})

export default TiccleCreateTextInputGroup
