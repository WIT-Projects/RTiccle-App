import React from 'react';
import { TouchableOpacity,Image, StyleSheet, View } from 'react-native';
import colors from '../../../../theme/colors';


const TiccleImage = ({setImage, deleteImage ,imageSource, imageId}) => {


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchableConatiner} onPress={ () =>  setImage(require('../../../../assets/images/example_group.png'))}
                disabled={imageSource ? true : false}>

                {(imageSource) ?
                <Image style={styles.image} source={imageSource} /> :
                <Image style={styles.imagePlus} source={ require('../../../../assets/images/plus.png')} />
                }
                
            </TouchableOpacity>

            {(imageSource) ?         
            <TouchableOpacity
                style={styles.xButtonContainer} onPress={() => deleteImage(imageId)} activeOpacity={0.75}>
                <Image source={require('../../../../assets/images/x_circle_sub.png')} style={styles.xButton} />
            </TouchableOpacity>
            :
            <></>
            }
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
