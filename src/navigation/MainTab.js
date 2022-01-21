import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigatior from './stack/HomeStackNavigator';
import MyPage from '../containers/user/MyPage';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import colors from '../theme/colors';
import metrics from '../theme/metrices';
import { type } from '../theme/fonts';
import TiccleCreate from '../containers/ticcle/create/TiccleCreate';
import TiccleCreateHeaderLeft from './mainTabComponent/TiccleCreateHeaderLeft';
import TiccleCreateHeaderRight from './mainTabComponent/TiccleCreateHeaderRight';

const isTabActive = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    switch (routeName) {
        case 'GroupDetail':
        case 'GroupCreateType':
        case 'GroupCreateName':
        case 'GroupCreateImage':
        case 'GroupUpdate':
            return {display: 'none'};
    }
};

const MainTab = () => {
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
                name="TiccleCreate"
                component={TiccleCreate}
                options={() =>  ({
                    headerStyle :{
                        backgroundColor: colors.main,
                        height : metrics.topNavigationHeight,
                    },
                    title: '티클 작성',
                    headerTintColor : colors.white ,
                    headerTitleAlign : 'center',
                    headerTitleStyle : {
                        fontFamily: type.notoSansKR_Medium,
                        fontSize : 20,
                        lineHeight : 24,
                    },
                    headerLeft : () => (
                        <TiccleCreateHeaderLeft/>
                    ),
                    headerRight : () => (
                        <TiccleCreateHeaderRight/>
                    ),
                    tabBarStyle: {display : 'none'},
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
                    }
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTab;
