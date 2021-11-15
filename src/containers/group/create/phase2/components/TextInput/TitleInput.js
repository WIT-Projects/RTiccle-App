import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';

import colors from '../../../../../../theme/colors';
import fonts from '../../../../../../theme/fonts';

function TitleInput({setButtonDisable}) {
  const [createGroupName, onCreateGroupName] = useState("")
  var groupNameLength = createGroupName.length;
  const maxLengthOfTitle = 15;

  useEffect(() => {
    (groupNameLength > 0) ? setButtonDisable(false) : setButtonDisable(true);
  }, [createGroupName])

  return(
    <View style={styles.container}>
      
      <TextInput style={styles.textinput}
      onChangeText ={onCreateGroupName}
      placeholder="음식, 공부, 전시 등"
      placeholderTextColor = {colors.gray2}
      maxLength = {maxLengthOfTitle}
      >
      </TextInput>

      <Text style={styles.textCount}>{groupNameLength}/15</Text>

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
    marginBottom : 30,
  },
  textinput :{
    width : 330,
    fontSize: 24,
    fontWeight : 'bold',
    fontFamily : fonts.type.spoqaHanSansNeo,
  },
  textCount :{
    color : colors.gray3,
    fontSize : 12,
    fontFamily : fonts.type.spoqaHanSansNeo,
    paddingRight : 5,
  }
})

export default TitleInput

