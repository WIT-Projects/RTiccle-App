import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackNavigatior from './stack/HomeStackNavigator';
import TiccleStackNavigator from './stack/TiccleStackNavigator';
import MyPage from '../containers/user/MyPage';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const isTabActive = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    switch (routeName) {
        case 'GroupCreateType':
        case 'GroupCreateName':
        case 'GroupCreateImage':
        case 'GroupUpdate':
            return {display: 'none'};
    }
};

const TabNav = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeStack"
                component={HomeStackNavigatior}
                options={({route}) => ({
                    title: '홈',
                    headerShown: false,
                    tabBarStyle: isTabActive(route),
                })}
            />
            <Tab.Screen
                name="TiccleStack"
                component={TiccleStackNavigator}
                options={{
                    title: '티끌쓰기',
                    headerShown: false,
                    tabBarStyle: {display: 'none'},
                }}
            />
            <Tab.Screen
                name="MyPage"
                component={MyPage}
                options={{
                    title: '마이페이지',
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNav;
