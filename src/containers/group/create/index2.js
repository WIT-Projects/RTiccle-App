import React, { useState } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

import TopBar from './phase2/TopBar';
import TextInfo from './phase2/TextInfo';
import TextInputGroup from './phase2/TextInputGroup';
import SaveButton from './phase2/SaveButton';

import colors from '../../../theme/colors';

function GroupCreatePhaseTwo(){

  const [groupCreateButtonDisable, setGroupCreateButtonDisable]= useState(true);

  return(
    <View style={styles.container}>
      <TopBar></TopBar>

      <ScrollView>
        <TextInfo></TextInfo>
        <TextInputGroup setButtonDisable={setGroupCreateButtonDisable}></TextInputGroup>
        <SaveButton buttonDisabled={groupCreateButtonDisable}></SaveButton>
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

export default GroupCreatePhaseTwo

