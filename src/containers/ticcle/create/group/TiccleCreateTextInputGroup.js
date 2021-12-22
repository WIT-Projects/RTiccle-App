import React from 'react';
import { View, StyleSheet } from 'react-native';

import TiccleCreateTextInput from '../components/TiccleCreateTextInput';
import colors from '../../../../theme/colors';

import useTiccleCreate from '../../../../context/hook/UseTiccleCreate';

const TiccleCreateTextInputGroup = () => {

    const {setTiccleTitle, setTiccleLink, setTiccleTag} = useTiccleCreate();
    return(
        <View style={styles.container}>
                <TiccleCreateTextInput
                fontSize={24} fontWeight={'bold'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"제목"} onChangeText={setTiccleTitle}
                />
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"URL 링크 (선택)"} onChangeText={setTiccleLink}/>
                <TiccleCreateTextInput
                fontSize={18} fontWeight={'normal'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"태그 ex. #경제 #마케팅"} onChangeText={setTiccleTag}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop : 6,
    }
})

export default TiccleCreateTextInputGroup
