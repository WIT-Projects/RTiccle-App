import React from 'react';
import {  Text,  View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../../../theme/colors';
import fonts from '../../../../../theme/fonts';

function SaveButton({buttonDisabled}) {
  return(
    <View style={styles.container}>
      <TouchableOpacity
      style={[styles.touchableOpacitiy,
        buttonDisabled ? styles.touchableDisableColor : styles.touchableColor
      ]}
      disabled={buttonDisabled}>

        <Text style={[styles.buttonText,
          buttonDisabled ? styles.textDisabledColor : styles.textColor
          ]}>
          저장하기
        </Text>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    alignItems: 'center',
    justifyContent : 'center',
    marginTop : 146,
  },
  touchableOpacitiy:{
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
    fontFamily : fonts.type.spoqaHanSansNeo,
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

