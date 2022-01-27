import React, {useState, useEffect} from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../theme/colors';
import { type } from '../../../../../theme/fonts';

const TiccleDetailHeaderRight = ({ticcleDetail}) => {
    const navigateTo = useNavigation()

    return (
        <TouchableOpacity
            style={styles.headerRightTouchable}
            onPress={ () => {
                console.log(ticcleDetail)
                navigateTo.navigate('TiccleUpdate', {ticcleData: ticcleDetail})
            }}>
            <Text style={styles.headerRightText}>수정</Text>
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

export default TiccleDetailHeaderRight
