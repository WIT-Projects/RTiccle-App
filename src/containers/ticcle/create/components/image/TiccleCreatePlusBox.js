import React from 'react';
import { View,TouchableOpacity, Image, StyleSheet } from 'react-native';
import colors from '../../../../../theme/colors';

const TicclePlusBox = ({setPhotoModalVisible}) => {
    const photoModalVisibleTrue = () => {
        setPhotoModalVisible(true)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.touchableConatiner} onPress={photoModalVisibleTrue}>
                <Image style={styles.imagePlus} source={ require('../../../../../assets/images/plus.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginRight : 18,
    },
    touchableConatiner : {
        alignItems : 'center',
        justifyContent : 'center',
        width : 82,
        height : 82,
        backgroundColor : colors.gray6,
        borderRadius : 16,

    },
    imagePlus : {
        resizeMode: 'cover',
        width : 20,
        height: 20,
    },
})

export default TicclePlusBox
