import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import colors from '../../theme/colors';
import {type} from '../../theme/fonts';
import MainTab from '../MainTab';
import TiccleDetail from '../../containers/ticcle/detail/TiccleDetail';
import metrics from '../../theme/metrices';
import LoginScreen from '../../containers/login/LoginScreen';
import SearchScreen from '../../containers/search/SearchScreen';
import TiccleDetailHeaderLeft from './mainStackComponent/TiccleDetailHeaderLeft';
import TiccleDetailHeaderRight from './mainStackComponent/TiccleDetailHeaderRight';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {

    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    options={{headerShown: false}}
                    name="Home"
                    component={MainTab}
                />
                <MainStack.Screen
                    name="TiccleDetail"
                    component={TiccleDetail}
                    options={() => ({
                        headerStyle: {
                            backgroundColor: colors.main,
                            height: metrics.topNavigationHeight,
                        },
                        title: '티끌',
                        headerTintColor: colors.white,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontFamily: type.notoSansKR_Medium,
                            fontSize: 20,
                            lineHeight: 24,
                        },
                        headerLeft: () => (
                            <TiccleDetailHeaderLeft/>
                        ),
                        headerRight: () => (
                            <TiccleDetailHeaderRight/>
                        ),
                    })}
                />
                <MainStack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <MainStack.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default MainStackNavigator;
