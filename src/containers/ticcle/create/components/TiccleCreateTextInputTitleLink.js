import React from 'react';
import { View, StyleSheet } from 'react-native';

import TiccleCreateTextInput from './TiccleCreateTextInput';
import colors from '../../../../theme/colors';


const TiccleCreateTextInputTitleLink = ({ticcleTitle, setTiccleTitle, ticcleLink,setTiccleLink}) => {

    return(
        <View style={styles.container}>
                <TiccleCreateTextInput
                fontSize={24} fontWeight={'bold'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"제목"} value={ticcleTitle} onChangeText={setTiccleTitle} 
                />
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"URL 링크 (선택)"} value={ticcleLink} onChangeText={setTiccleLink}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop : 6,
    }
})

export default TiccleCreateTextInputTitleLink
