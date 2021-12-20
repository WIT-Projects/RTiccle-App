import React from 'react';
import {  Text,  View, StyleSheet} from 'react-native';

import colors from '../../../../theme/colors';

function TextInfo({title, subtitle}) {
  return(
    <View style={styles.container}>
      <Text style={styles.text1}>{title}</Text>
      <Text style={styles.text2}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    alignItems: 'flex-start',
    justifyContent : 'center',
    width : '100%',
    height : 180,
    paddingHorizontal: 18,
    backgroundColor:'pink'
  },
  text1:{
    color : colors.gray5,
    fontSize : 24,
    fontWeight : 'bold',
    marginBottom : 12,
  },
  text2:{
    color : colors.gray4,
    fontSize: 16,
  }
})

export default TextInfo
