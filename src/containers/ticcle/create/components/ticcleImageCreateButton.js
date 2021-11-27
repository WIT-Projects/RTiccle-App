import React from 'react'
import { TouchableOpacity, Text, StyleSheet,Image } from 'react-native'
import colors from '../../../../theme/colors'


const TiccleImageCreateButton = () => {
    return (
        <TouchableOpacity style={styles.touchableContainer}>
            <Text style={styles.text}>클릭하여 이미지를 추가해보세요</Text>
            <Image source={require('../../../../assets/images/logo.png')}
            style={styles.image}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingHorizontal : 16,
        backgroundColor : colors.gray6,
        width : '100%',
        height : 82,
        borderRadius : 16,
    },
    text : {
        fontSize : 16,
        color : colors.gray3
    },
    image : {
        resizeMode : 'contain',
        width : 22,
        height : 22,
        tintColor : colors.gray4
    }
})


export default TiccleImageCreateButton
