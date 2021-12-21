import React, { useState } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

import TextInfo from './components/TextInfo';
import TextInputGroup from './components/TextInputGroup';
import SaveButton from './components/SaveButton';
// import GroupCreateImage from './GroupCreateImage';

import colors from '../../../theme/colors';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

function GroupCreateName({navigation}){

  const [groupCreateButtonDisable, setGroupCreateButtonDisable]= useState(true);

  return(
    <View style={styles.container}>
      {/* <Stack.Navigator>
        <Stack.Screen name="GroupCreateImage" component={GroupCreateImage} navigation={navigation} />
      </Stack.Navigator> */}

      <ScrollView>
        <TextInfo title='그룹의 이름은 무엇인가요?' subtitle='나만의 그룹 이름을 입력해보세요!'></TextInfo>
        <TextInputGroup setButtonDisable={setGroupCreateButtonDisable}></TextInputGroup>
        <SaveButton text='다음으로' buttonDisabled={groupCreateButtonDisable} navigation={navigation}></SaveButton>
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
