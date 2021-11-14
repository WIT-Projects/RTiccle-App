import React from 'react';
import {  Text,  View, StyleSheet} from 'react-native';

import colors from '../../../../theme/colors';

function TextInfo() {
  return(
    <View style={styles.container}>
      <Text style={styles.text1}>그룹의 이름은 무엇인가요?</Text>
      <Text style={styles.text2}>나만의 그룹 이름을 입력해보세요!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    alignItems: 'flex-start',
    justifyContent : 'center',
    width : '100%',
    height : 180,
    paddingHorizontal : 18
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

