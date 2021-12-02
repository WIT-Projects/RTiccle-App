import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../theme/colors';
import { type } from '../theme/fonts';
import metrics from '../theme/metrices';

import GroupCreate from '../containers/group/create/GroupCreate';
import MyPage from '../containers/user';
import TiccleCreate from '../containers/ticcle/create';

import HomeStackNavigatior from './stack/HomeStackNavigator';

const TabNav = () => {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{ headerShown: false }} name="HomeStack" component={HomeStackNavigatior} />
                <Tab.Screen name="GroupCreate" component={GroupCreate} />
                <Tab.Screen name="티끌 작성" component={TiccleCreate}
                        options={ ({navigation}) =>  ({
                            headerStyle :{
                            backgroundColor: colors.main,
                            height : metrics.topNavigationHeight,
                        },
                            headerTintColor : colors.white ,
                        headerTitleAlign : 'center',
                        headerTitleStyle : {
                        fontSize : 20,
                        },
                        headerLeft : () => (
                            <TouchableOpacity style={styles.headerLeftTouchable} onPress={() => navigation.navigate('Home')}>
                                <Image source={require('../assets/images/chevron_left.png')}
                                    style={styles.headerLeftImage}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight : () => (
                            <TouchableOpacity style={styles.headerRightTouchable}>
                                <Text style={styles.headerRightText}>저장</Text>
                            </TouchableOpacity>
                        )
                        })}
                />
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
    }
    ,
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

