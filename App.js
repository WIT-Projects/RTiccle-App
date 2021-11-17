import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/containers/home';
import Create from './src/containers/group/create';
import MyPage from './src/containers/user';
import { anonSignIn } from './src/firebase/auth';

function App(){
  useEffect(() => {
    anonSignIn(); // tmp
  }, []);

  const Tab = createBottomTabNavigator();

  return(
    // <>
    // <MyPage/>
    // </>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="MyPage" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;

