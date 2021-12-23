import React from 'react';
import { TouchableOpacity,Image, StyleSheet, View, Alert } from 'react-native';
import colors from '../../../../theme/colors';

const TiccleImage = ({setModalVisibleTrue, deleteImage ,imageSource, imageId}) => {

    const removeAlert = () => {Alert.alert(
        '',
        '사진을 삭제하시겠습니까?',
        [
            {text : '뒤로가기', onPress: () => {}},
            {text: "삭제", onPress: () => {deleteImage(imageId)}}
        ],
        {
            cancelable: true,
            onDismiss: () => {}
        }
    )};

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchableConatiner} onPress={setModalVisibleTrue}
                disabled={imageSource ? true : false}>
                <Image style={styles.image} source={{uri : imageSource}} />            
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.xButtonContainer} onPress={removeAlert} activeOpacity={0.75}>
                <Image source={require('../../../../assets/images/x_circle_sub.png')} style={styles.xButton} />
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
    image : {
        resizeMode : 'cover',
        width: '100%',
        height : '100%',
        borderRadius : 16
    },
    imagePlus : {
        resizeMode: 'cover',
        width : 20,
        height: 20,
    },
    xButtonContainer:{
        position : 'absolute',
        top : -5,
        right : -5,
        width : 24,
        height : 24,
    },
    xButton : {
        width: '100%',
        height: '100%'
    }
})

export default TiccleImage 
