import React from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../theme/colors';
import { type } from '../../../../../theme/fonts';
import { ticcleUpdateFirebase } from '../../function/ticcleUpdateFirebase';
import useTiccleChanged from '../../../../../context/hook/useTiccleChanged';
import {useErrorHandler} from 'react-error-boundary';

const TiccleUpdateHeaderRight = ({ticcleUpdate, originalTiccle, setIsLoading}) => {
    const navigation = useNavigation();
    const {isTiccleListChanged, setIsTiccleListChanged} = useTiccleChanged();
    const handleError = useErrorHandler(); // for error handling

    const saveButtonEvent = async() => {
        setIsLoading(true);
        const updatedTiccleData = await ticcleUpdateFirebase(ticcleUpdate, originalTiccle).catch(err => handleError(err));
        setIsTiccleListChanged(!isTiccleListChanged);
        setIsLoading(false);
        navigation.navigate('TiccleDetail', {ticcleData: updatedTiccleData});
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
