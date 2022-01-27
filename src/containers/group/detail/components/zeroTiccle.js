import React from 'react';
import {StyleSheet, Text, Dimensions, View} from "react-native";
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const windowHeight = Dimensions.get('window').height;
const remainder = 256 + 48 + 66; //GroupInfo + search + bottom 의 height

const ZeroTiccle = () => {
  return(
    <>
        <View style={styles.container}>
        <View style={styles.image}></View>
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
    },
    font1:{
        fontSize: 16,
        color: colors.gray4,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
    image:{
        width:68,
        height:68,
        backgroundColor:colors.gray2,
        marginBottom: 10,
    },
})

export default ZeroTiccle;
