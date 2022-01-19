import React from 'react';
import { Image,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import useTiccleCreate from '../../../context/hook/useTiccleCreate';

const TiccleDetailHeaderLeft = () => {
    const {initialTiccle} = useTiccleCreate();
    const navigateTo = useNavigation()
    return (
        <TouchableOpacity
            style={styles.headerLeftTouchable}
            onPress={() => {
                navigateTo.navigate('HomeStack');
                initialTiccle();
            }}>
            <Image
                source={require('../../../assets/images/chevron_left.png')}
                style={styles.headerLeftImage}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerLeftTouchable: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    headerLeftImage: {
        resizeMode: 'cover',
        width: 12,
        height: 20,
        tintColor: colors.white,
    },
})

export default TiccleDetailHeaderLeft
