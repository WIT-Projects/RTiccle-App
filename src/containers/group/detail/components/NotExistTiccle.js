import React from 'react';
import {StyleSheet, Text, Dimensions, View, Image} from "react-native";
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const windowHeight = Dimensions.get('window').height;
const remainder = 256 + 48; //GroupInfo + search의 height

const NotExistTiccle = () => {
  return(
    <>
        <View style={styles.container}>
        <Image source={require('../../../../assets/images/noTiccle.png')} style={styles.image}></Image>
            <Text style={styles.font1}>관련된 티끌이 없어요</Text>
            <Text style={styles.font1}>생성해보시겠어요?</Text>
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

export default NotExistTiccle;
