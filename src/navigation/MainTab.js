import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigatior from './stack/HomeStackNavigator';
import MyPage from '../containers/user/MyPage';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import colors from '../theme/colors';
import { type } from '../theme/fonts';
import TiccleCreate from '../containers/ticcle/create/TiccleCreate';

const isTabActive = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    switch (routeName) {
        case 'GroupDetail':
        case 'GroupCreateType':
        case 'GroupCreateName':
        case 'GroupCreateImage':
        case 'GroupUpdate':
        case 'GroupDetail':
            return {display: 'none'};
        default:
            return {backgroundColor: colors.main, height: 67, paddingBottom: 13, paddingTop: 14};
    }
};

const MainTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {backgroundColor: colors.main, height: 67, paddingBottom: 13, paddingTop: 14},
                tabBarLabelStyle: {
                    fontSize: 9,
                    color: colors.white,
                    fontFamily: type.spoqaHanSansNeo_Light,
                },
            }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStackNavigatior}
                options={({route}) => ({
                    title: '홈',
                    headerShown: false,
                    tabBarStyle: isTabActive(route),
                    tabBarIcon: ({focused}) => (
                        <Image source={focused ? require('../assets/images/tabHomeActive.png') : require('../assets/images/tabHome.png')} />
                    ),
                })}
            />
            <Tab.Screen
                name="TiccleCreate"
                component={TiccleCreate}
                initialParams={{groupId : ''}}
                options={() =>  ({
                    headerShown: false,
                    tabBarStyle: {display: 'none'},
                    tabBarIcon: () => <Image source={require('../assets/images/tabTiccleCreate.png')} />
                })}
            />
            <Tab.Screen
                name="MyPage"
                component={MyPage}
                options={{
                    title: '마이페이지',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: colors.main,
                    },
                    headerTitleStyle:{
                        color: colors.white,
                        fontFamily : type.notoSansKR_Medium,
                        fontSize: 20,
                    },
                    tabBarLabel: 'MY',
                    tabBarIcon: ({focused}) => (
                        <Image source={focused ? require('../assets/images/tabMypageActive.png') : require('../assets/images/tabMypage.png')} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTab;
