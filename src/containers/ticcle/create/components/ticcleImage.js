import React from 'react';
import { TouchableOpacity,Image, StyleSheet, Text } from 'react-native';
import colors from '../../../../theme/colors';


const TiccleImage = ({onPress, imageSource}) => {


    return (  
        <TouchableOpacity style={styles.touchableConatiner} onPress={onPress}
        disabled={imageSource ? true : false}>
            <Image source={imageSource}
            style={styles.image}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableConatiner : {
        width : 82,
        height : 82,
        backgroundColor : colors.gray3,
        borderRadius : 16,
        marginRight : 18,
    },
    image : {
        resizeMode : 'cover',
        width: '100%',
        height : '100%',
        borderRadius : 16
    }
})

export default TiccleImage 
