import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image} from 'react-native';

import Home from './src/containers/home';
import GroupCreate from './src/containers/group/create/GroupCreate';
import MyPage from './src/containers/user';
import { anonSignIn } from './src/firebase/auth';

import GroupDetail from './src/containers/group/detail';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigatior = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen 
            name="Home" 
            component={Home} 
            options={{
                title:"RTICCLE",
                headerLeft: () => (
                  <Image source={require('./src/assets/images/logo.png')}/>
                ),
                headerRight:() => (
                  <Image source={require('./src/assets/icon/searchBlack.png')}/>
                )
        }} />
        <HomeStack.Screen options={{ headerShown: false }} name="GroupDetail" component={GroupDetail} />
    </HomeStack.Navigator>
);

function App(){
  useEffect(() => {
    anonSignIn(); // tmp
  }, []);

  const Tab = createBottomTabNavigator();

  return(
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ headerShown: false }} name="HomeStack" component={HomeStackNavigatior} />
        <Tab.Screen name="GroupCreate" component={GroupCreate} />
        <Tab.Screen name="MyPage" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App;

