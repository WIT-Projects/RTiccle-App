import React, { useState } from 'react';
import {StyleSheet, TextInput , View, Image} from "react-native";
import colors from '../../../../theme/colors'

const  Bottom = () => {

  return(
    <>
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../../../../assets/icon/home.png')}></Image>
            <Image style={styles.icon} source={require('../../../../assets/icon/write_ticcle.png')}></Image>
            <Image style={styles.icon} source={require('../../../../assets/icon/my.png')}></Image>
        </View>
        
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: colors.main,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default Bottom;
