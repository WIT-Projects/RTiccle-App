import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import colors from '../theme/colors';
import { type } from '../theme/fonts';
import metrics from '../theme/metrices';

import GroupCreate from '../containers/group/create/GroupCreate';
import HomeStackNavigatior from './stack/HomeStackNavigator';
import TiccleStackNavigator from './stack/TiccleStackNavigator';
import MyPage from '../containers/user/MyPage'

const TabNav = () => {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{ headerShown: false }} name="HomeStack" component={HomeStackNavigatior}/>
                <Tab.Screen name="GroupCreate" component={GroupCreate} />
                <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarStyle : {display : 'none'}
                }} name="TiccleStack" component={TiccleStackNavigator}/>
                <Tab.Screen name="MyPage" component={MyPage} />
        </Tab.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    headerLeftTouchable :{
        alignItems: 'center',
        justifyContent : 'center',
        width: 40,
        height : 40
    },
    headerLeftImage : {
        resizeMode : 'cover',
        width : 12, 
        height: 20, 
        tintColor : colors.white
    },
    headerRightTouchable : {
        alignItems: 'center',
        justifyContent : 'center',
        width : 60,
        height : 40,
        marginRight : 14,
    },
    headerRightText : {
        color : colors.white,
        fontFamily: type.notoSansKR_Regular,
        fontSize : 20,
    }
})

export default TabNav;
