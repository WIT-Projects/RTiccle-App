import React from 'react';
import { View } from 'react-native';
import TiccleCreateTextInput from './TiccleCreateTextInput';
import colors from '../../../../../theme/colors';
import useTiccleCreate from '../../../../../context/hook/useTiccleCreate';


const TiccleCreateTextInputTitleLink = ({}) => {
    const {ticcle, setTiccleTitle, setTiccleLink} = useTiccleCreate();
    const ticcleTitle = ticcle.title
    const ticcleLink = ticcle.link
    return(
        <View >
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


export default TiccleCreateTextInputTitleLink
