import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from '../MainTab';
import TiccleDetail from '../../containers/ticcle/detail/TiccleDetail';
import LoginScreen from '../../containers/login/LoginScreen';
import SearchScreen from '../../containers/search/SearchScreen';
import TiccleUpdate from '../../containers/ticcle/update/TiccleUpdate';


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
                        headerShown : false,
                    })}
                />
                <MainStack.Screen
                    name="TiccleUpdate"
                    component={TiccleUpdate}
                    options={() => ({
                        headerShown: false,
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
