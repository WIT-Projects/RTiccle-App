import React, {useState, useEffect} from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { doCreateTiccle, doUpdateTiccle } from '../../../../../model/TiccleModel';
import colors from '../../../../../theme/colors';
import { type } from '../../../../../theme/fonts';
import useTiccleCreate from '../../../../../context/hook/useTiccleCreate';

const TiccleCreateHeaderRight = () => {
    const navigateTo = useNavigation()
    const {ticcle} = useTiccleCreate();
    const [saveButtonDisable, setSaveButtonDisable] = useState(true);

    useEffect(() => {
        (ticcle.title && ticcle.content && ticcle.groupId)
        ?
        setSaveButtonDisable(false)
        : setSaveButtonDisable(true);
    },[ticcle.title, ticcle.content, ticcle.groupId])

    const saveButtonEvent = () => {
       doCreateTiccle(ticcle, ticcle.images)
    }
    

    return (
        <TouchableOpacity
            style={styles.headerRightTouchable}
            disabled={saveButtonDisable}
            onPress={ () => {
                saveButtonEvent()
                console.log(ticcle)
                navigateTo.navigate('TiccleDetail')
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
