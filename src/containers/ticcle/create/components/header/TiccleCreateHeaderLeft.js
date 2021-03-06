import React from 'react';
import { Image,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../theme/colors';
import useTiccleCreate from '../../../../../context/hook/useTiccleCreate';

const TiccleCreateHeaderLeft = () => {
    const {initialTiccle} = useTiccleCreate();
    const navigateTo = useNavigation()
    return (
        <TouchableOpacity
            style={styles.headerLeftTouchable}
            onPress={() => {
                initialTiccle();
                navigateTo.goBack();
            }}>
                <Image source={require('../../../../../assets/images/chevron_left.png')}
                        style={styles.headerLeftImage}
                />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerLeftTouchable :{
        position: 'absolute',
        left: 0,
        top: 9, 
        alignItems: 'center',
        justifyContent : 'center',
        width: 40,
        height : 40,
        paddingLeft: 6,
    },
    headerLeftImage : {
        resizeMode : 'cover',
        width : 12, 
        height: 20, 
        tintColor : colors.white
    },
})

export default TiccleCreateHeaderLeft
