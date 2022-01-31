import React from 'react';
import { Image,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../theme/colors';
import useGroupChanged from '../../../../../context/hook/useGroupChanged';

const TiccleDetailHeaderLeft = () => {
    const navigateTo = useNavigation();
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();
    return (
        <TouchableOpacity
            style={styles.headerLeftTouchable}
            onPress={() => {
                setIsGroupChanged(!isGroupChanged);
                navigateTo.navigate('HomeStack');
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

export default TiccleDetailHeaderLeft
