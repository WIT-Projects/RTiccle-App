import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/containers/home';
import GroupCreate from './src/containers/group/create/GroupCreate';
import MyPage from './src/containers/user';
import { anonSignIn } from './src/firebase/auth';

function App(){
  useEffect(() => {
    anonSignIn(); // tmp
  }, []);

  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="RTICCLE" component={Home} />
        <Tab.Screen name="GroupCreate" component={GroupCreate} />
        <Tab.Screen name="MyPage" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;

