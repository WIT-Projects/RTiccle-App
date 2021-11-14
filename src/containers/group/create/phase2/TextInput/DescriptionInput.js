import React, { useState } from 'react';
import {  Text,  View, StyleSheet, TextInput} from 'react-native';

import colors from '../../../../../theme/colors';
import fonts from '../../../../../theme/fonts';

function DescriptionInput() {
  const [createGroupDescription, setCreateGroupDescirption] = useState("");
  var groupDescriptionLength = createGroupDescription.length

  return(
    <View style={styles.container}>
      
    <TextInput style={styles.textinput}
    onChangeText = {setCreateGroupDescirption}
    placeholder="설명 (선택)"
    placeholderTextColor = {colors.gray2}
    maxLength = {23}
    >
    </TextInput>

    <Text style={styles.textCount}>{groupDescriptionLength}/23</Text>

  </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    borderColor : colors.gray1,
    borderBottomWidth : 1,
  },
  textinput :{
    width : 330,
    fontSize: 16,
    fontFamily : fonts.type.spoqaHanSansNeo,
  },
  textCount :{
    color : colors.gray3,
    fontSize : 12,
    fontFamily : fonts.type.spoqaHanSansNeo,
    paddingRight : 5,
  }
})

export default DescriptionInput

