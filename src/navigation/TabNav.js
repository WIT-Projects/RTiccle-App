import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../theme/colors';
import { type } from '../theme/fonts';
import metrics from '../theme/metrices';

import GroupCreate from '../containers/group/create/GroupCreate';
import MyPage from '../containers/user/MyPage';
import TiccleCreate from '../containers/ticcle/create';

import HomeStackNavigatior from './stack/HomeStackNavigator';
import TiccleStackNavigator from './stack/TiccleStackNavigator';

const TabNav = () => {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{ headerShown: false }} name="HomeStack" component={HomeStackNavigatior} />
                <Tab.Screen name="GroupCreate" component={GroupCreate} />
                <Tab.Screen options={{ headerShown: false }} name="TiccleStack" component={TiccleStackNavigator}/>
                <Tab.Screen name="MyPage" component={MyPage} />
        </Tab.Navigator>
    </NavigationContainer>
    )
}



export default TabNav;

