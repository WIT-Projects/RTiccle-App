import React from 'react';
import {  View, StyleSheet} from 'react-native';

import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput';

function TextInputGroup({setButtonDisable}) {
  return(
    <View style={styles.container}>
      <TitleInput  setButtonDisable={setButtonDisable}> </TitleInput>
      <DescriptionInput></DescriptionInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    justifyContent : 'center',
    width : '100%',
    height : 240,
    paddingHorizontal : 18,
  }
})

export default TextInputGroup
