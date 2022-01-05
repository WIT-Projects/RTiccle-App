import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigatior from './stack/HomeStackNavigator';
import TiccleStackNavigator from './stack/TiccleStackNavigator';
import MyPage from '../containers/user/MyPage'
import UseUserLocation from '../context/hook/UseUserLocation'
const MainTab = () => {
    const Tab = createBottomTabNavigator();
    const {initialCurrentGroup} =UseUserLocation();
    return(
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
                    title: "My",
                }}
                listeners={{
                    tabPress: () => {
                        initialCurrentGroup();
                    }
                }}
                />
        </Tab.Navigator>
    )
}

export default MainTab;
