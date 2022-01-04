import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Home from '../../containers/home/Home';
import GroupDetail from '../../containers/group/detail/GroupDetail';

const HomeStack = createStackNavigator();

const HomeStackNavigatior = () => {
    const navigateTo = useNavigation();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={({navigation}) => ({
                    title: 'RTICCLE',
                    headerLeft: () => (
                        <Image
                            style={{marginLeft: 18}}
                            source={require('../../assets/images/logo.png')}
                        />
                    ),
                    headerRight: () => (
                        <Image
                            onTouchEnd={() => { navigateTo.navigate('SearchScreen') }}
                            style={{marginRight: 28}}
                            source={require('../../assets/icon/searchBlack.png')}
                        />
                    ),
                })}
            />
            <HomeStack.Screen
                options={{headerShown: false}}
                name="GroupDetail"
                component={GroupDetail}
            />
        </HomeStack.Navigator>
    );
};

export default HomeStackNavigatior;
