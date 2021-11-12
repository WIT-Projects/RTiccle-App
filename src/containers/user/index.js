import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { createStackNavigator, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';

import Setting from './components/settings';
import GuestInfo, { GuestGuide } from './components/guest';

const Stack = createStackNavigator();
const isGuest = true;

function MyPage() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="MyPage">
            <Stack.Screen 
                name="MyPage" 
                component={MyPageScreen}
                options={{                
                    title: "마이페이지",
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: colors.main,
                    },
                    headerTintColor: colors.white,
                    headerLeft: () => (
                        <Icon name="chevron-left" size={30} style={{ paddingLeft: 20 }} color={colors.white}/>
                    )
                }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyPageScreen( {navigation}) {
    return (
        <View style={{flex:1}}>
              <Text style={styles.myInfo}>내 정보</Text>
              { isGuest ? <GuestInfo /> : <View></View> }
              <View style={styles.block}></View>
              <Setting />
              { isGuest ? <GuestGuide /> : <View></View> }
        </View>
      );
}

const styles = StyleSheet.create({
    myInfo: {
        fontSize: 20,
        margin: 20,
    },
    block: {
        height: 10,
        backgroundColor: colors.gray2,
        marginVertical: 10,
    },
})

export default MyPage;