import React, {useState, useEffect} from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../theme/colors';
import { type } from '../../../../../theme/fonts';

const TiccleUpdateHeaderRight = ({updateTiccleData}) => {
    const navigation = useNavigation() 

    const saveButtonEvent = () => {
        navigation.navigate('TiccleDetail', {ticcleData: updateTiccleData});
        console.log("티끌 수정 완료. TiccleDetail로 수정된 Ticcle 보내기")
    }

    return (
        <TouchableOpacity
            style={styles.headerRightTouchable}
            onPress={saveButtonEvent}>
            <Text style={styles.headerRightText}>저장</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerRightTouchable : {
        position: 'absolute',
        right: 0,
        top: 9,
        alignItems: 'center',
        justifyContent : 'center',
        width : 60,
        height : 40,
        marginRight : 14,
    },
    headerRightText : {
        color : colors.white,
        fontFamily: type.notoSansKR_Medium,
        fontSize : 20,
        lineHeight : 24,
        marginBottom: 1,
    },
})

export default TiccleUpdateHeaderRight
