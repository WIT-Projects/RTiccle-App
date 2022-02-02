import React, {useState, useEffect} from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { doCreateTiccle } from '../../../../../model/TiccleModel';
import colors from '../../../../../theme/colors';
import { type } from '../../../../../theme/fonts';
import useTiccleCreate from '../../../../../context/hook/useTiccleCreate';
import useTiccleChanged from '../../../../../context/hook/useTiccleChanged';
import useGroupChanged from '../../../../../context/hook/useGroupChanged';
import {useErrorHandler} from 'react-error-boundary';

const TiccleCreateHeaderRight = ({setIsLoading}) => {
    const navigateTo = useNavigation()
    const {ticcle} = useTiccleCreate();
    const [saveButtonDisable, setSaveButtonDisable] = useState(true);
    const {isTiccleListChanged, setIsTiccleListChanged} = useTiccleChanged();
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();
    const handleError = useErrorHandler(); // for error handling

    useEffect(() => {
        (ticcle.title && ticcle.content && ticcle.groupId)
        ?
        setSaveButtonDisable(false)
        : setSaveButtonDisable(true);
    }, [ticcle.title, ticcle.content, ticcle.groupId])

    const saveButtonEvent = async () => {
        setIsLoading(true);
        const updatedTiccle = await doCreateTiccle(ticcle, ticcle.images).catch(err => handleError(err));
        setIsTiccleListChanged(!isTiccleListChanged);
        setIsGroupChanged(!isGroupChanged);
        setIsLoading(false);
        navigateTo.navigate('TiccleDetail',{ticcleData: updatedTiccle}) 
    }

    return (
        <TouchableOpacity
            style={styles.headerRightTouchable}
            disabled={saveButtonDisable}
            onPress={ () => {
                saveButtonEvent()
            }}>
            <Text style={saveButtonDisable ? styles.headerRightTextDisable : styles.headerRightText}>저장</Text>
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
    headerRightTextDisable: {
        color : colors.gray5,
        fontFamily: type.notoSansKR_Medium,
        fontSize : 20,
        lineHeight : 24,
        marginBottom: 1,
    }
})

export default TiccleCreateHeaderRight
