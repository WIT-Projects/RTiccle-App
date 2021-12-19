import React, { useState } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

import TextInfo from './components/TextInfo';
import TextInputGroup from './components/TextInputGroup';
import SaveButton from './components/SaveButton';

import colors from '../../../theme/colors';

function GroupCreateName({navigation}){

  const [groupCreateButtonDisable, setGroupCreateButtonDisable]= useState(true);

  return(
    <View style={styles.container}>
      <ScrollView>
        <TextInfo></TextInfo>
        <TextInputGroup setButtonDisable={setGroupCreateButtonDisable}></TextInputGroup>
        <SaveButton buttonDisabled={groupCreateButtonDisable} navigation={navigation}></SaveButton>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height : '100%',
    backgroundColor : colors.white,
  }
})

export default GroupCreateName;
