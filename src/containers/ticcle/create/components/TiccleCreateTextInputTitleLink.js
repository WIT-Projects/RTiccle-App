import React from 'react';
import { View, StyleSheet } from 'react-native';

import TiccleCreateTextInput from './TiccleCreateTextInput';
import colors from '../../../../theme/colors';


const TiccleCreateTextInputTitleLink = ({setTiccleTitle, setTiccleLink}) => {

    return(
        <View style={styles.container}>
                <TiccleCreateTextInput
                fontSize={24} fontWeight={'bold'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"제목"} onChangeText={setTiccleTitle}
                />
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"URL 링크 (선택)"} onChangeText={setTiccleLink}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop : 6,
    }
})

export default TiccleCreateTextInputTitleLink
