import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigatior from './stack/HomeStackNavigator';
import TiccleStackNavigator from './stack/TiccleStackNavigator';
import MyPage from '../containers/user/MyPage'

const TabNav = () => {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="HomeStack" component={HomeStackNavigatior}
                options={{ 
                    title : "홈",
                    headerShown: false }}
                />
                <Tab.Screen name="TiccleStack" component={TiccleStackNavigator}
                options={{
                    title: "티끌쓰기" ,
                    headerShown: false,
                    tabBarStyle : {display : 'none'}
                }}/>
                <Tab.Screen name="MyPage" component={MyPage}
                options={{
                    title: "My"
                }}/>
        </Tab.Navigator>
    </NavigationContainer>
    )
}

export default TabNav;
