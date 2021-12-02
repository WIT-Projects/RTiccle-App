import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../containers/home';
import GroupDetail from '../../containers/group/detail';

const HomeStack = createStackNavigator();

const HomeStackNavigatior = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen 
            name="Home" 
            component={Home} 
            options={{
                title:"RTICCLE",
                headerLeft: () => (
                    <Image source={require('../../assets/images/logo.png')}/>
                ),
                headerRight:() => (
                    <Image source={require('../../assets/icon/searchBlack.png')}/>
                )
        }} />
        <HomeStack.Screen options={{ headerShown: false }} name="GroupDetail" component={GroupDetail} />
    </HomeStack.Navigator>
);

export default HomeStackNavigatior;
