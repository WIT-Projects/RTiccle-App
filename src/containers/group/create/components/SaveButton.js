import React from 'react';
import {  Text,  View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

function SaveButton({ buttonDisabled, navigation }) {
  return(
      <TouchableOpacity
      style={[styles.touchableOpacitiy,
        buttonDisabled ? styles.touchableDisableColor : styles.touchableColor
        ]}
      onPress={() => navigation.navigate('GroupCreateImage')}
      disabled={buttonDisabled}>
        <Text style={[styles.buttonText,
          buttonDisabled ? styles.textDisabledColor : styles.textColor
          ]}>
          저장하기
        </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableOpacitiy:{
    marginTop : 146,
    alignItems: 'center',
    justifyContent : 'center',
    width : 168,
    height : 40,
    borderRadius : 24,
  },
  touchableColor:{
    backgroundColor : colors.main,
  },
  touchableDisableColor:{
    backgroundColor : colors.gray1,
  },
  buttonText:{
    fontFamily : type.spoqaHanSansNeo_Regular,
    fontSize : 16,
  },
  textColor:{
    color : colors.white,
  },
  textDisabledColor:{
    color : colors.gray4,
  },
})

export default SaveButton
