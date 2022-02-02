import React from 'react';
import {StyleSheet, Text, Dimensions, View, Image} from "react-native";
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const windowHeight = Dimensions.get('window').height;
const remainder = 256 + 48; //GroupInfo + search의 height

const ZeroTiccle = () => {
  return(
    <>
        <View style={styles.container}>
            <Image source={require('../../../../assets/images/noTiccle.png')} style={styles.image}></Image>
            <Text style={styles.font1}>작성된 티끌이 없네요.</Text>
            <Text style={styles.font1}>첫 티끌을 생성해보세요!</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight-remainder,
        backgroundColor: colors.white,
    },
    font1:{
        fontSize: 16,
        color: colors.gray4,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
    image:{
        width:68,
        height:68,
        marginBottom: 10,
        resizeMode: 'contain',
    },
})

export default ZeroTiccle;
