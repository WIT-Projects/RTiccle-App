import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/containers/home';
import GroupCreate from './src/containers/group/create/GroupCreate';
import MyPage from './src/containers/user/MyPage';
import { anonSignIn, googleSigninConfigure } from './src/firebase/Auth';

function App(){
  useEffect(() => {
    anonSignIn(); // tmp
    googleSigninConfigure();
  }, []);

  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="GroupCreate" component={GroupCreate} />
        <Tab.Screen name="MyPage" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;

