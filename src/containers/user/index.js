import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { createStackNavigator, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import auth from "@react-native-firebase/auth";

import Setting from './components/settings';
import GuestInfo, { GuestGuide } from './components/guest';
import UserInfo from './components/user';

const Stack = createStackNavigator();

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
    const [isGuest, setIsGuest] = useState(true);

    // Handle user state changes
    function onAuthStateChanged(user) {
        setIsGuest(user.isAnonymous);
    }
    useEffect(() => {
        auth().onAuthStateChanged(onAuthStateChanged); // init listener
    }, []);

    return (
        <View style={{flex:1}}>
              <Text style={styles.myInfo}>내 정보</Text>
              { isGuest ? <GuestInfo /> : <UserInfo /> }
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
