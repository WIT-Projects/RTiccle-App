import React from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';

const MyMount = ({mount, imgUrl}) => {
    return (
        <>
        <ImageBackground source={{uri:imgUrl}}
            resizeMode="cover"
            style={{ width: "100%", height: 243 }}>
            <View style={styles.container}>
                <Text style={styles.blackFont}>곧 {mount}으로 갈 수 있어요.</Text>
                <Text style={styles.whiteFont}>{mount}</Text>
            </View>
        </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    blackFont:{
        // fontFamily : fonts.type.spoqaHanSansNeo,
        fontSize : 18,
        fontWeight: 'bold',
        marginLeft: 18,
        marginTop: 17,
    },
    whiteFont:{
        position: 'absolute',
        bottom:0,
        alignSelf:'flex-end',
        // fontFamily : fonts.type.spoqaHanSansNeo,
        fontSize : 18,
        fontWeight: 'bold',
        color: colors.white,
        paddingRight: 14,
        marginBottom: 14,
    }
})


export default MyMount;
