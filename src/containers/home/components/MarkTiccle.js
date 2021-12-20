import React from 'react';
import {Text, Image, ImageBackground, View, ScrollView,  StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';

const MarkTiccle = ({imgUrl, title, count}) => {
    return (
        <>
            <View style={styles.container}>
                <ImageBackground 
                    source={{uri:imgUrl}}
                    resizeMode="cover"
                    style={{ width: 194, height: 111, flex:1 }}>
                    <Image style={styles.icon} source={require('../../../assets/icon/bookMark.png')}></Image>
                </ImageBackground>
                <Text style={styles.blackRegularFont}>{title}</Text>
                <Text style={styles.blackBoldFont}>총 {count}개</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 6.5,
    },
    icon:{
        position: 'absolute',
        top: 0,
        right: 10,
        alignSelf:'flex-end',
    },
    blackRegularFont:{
        fontFamily : type.spoqaHanSansNeo_Regular,
        fontSize : 16,
        marginTop: 10,
    },
    blackBoldFont:{
        fontFamily : type.spoqaHanSansNeo_Bold,
        fontSize : 12,
        marginTop: 5,
    },
    
})


export default MarkTiccle;