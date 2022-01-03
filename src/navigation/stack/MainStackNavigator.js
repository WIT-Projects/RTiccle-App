import React from 'react';
import { Image, StyleSheet, TouchableOpacity,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import colors from '../../theme/colors';
import { type } from '../../theme/fonts';
import MainTab from '../MainTab';
import GroupCreateName from '../../containers/group/create/GroupCreateName';
import GroupCreateImage from '../../containers/group/create/GroupCreateImage';
import GroupCreateType from '../../containers/group/create/GroupCreateType';
import TiccleDetail from '../../containers/ticcle/detail/TiccleDetail';
import metrics from '../../theme/metrices';
import useGroupCreate from '../../context/hook/useGroupCreate'
import UseTiccleCreate from '../../context/hook/UseTiccleCreate';
import LoginScreen from '../../containers/login/LoginScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {

    const {initialGroupCreate} = useGroupCreate();
    const {initialTiccle, ticcle} = UseTiccleCreate();
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen 
                options={{headerShown: false}}
                name="MainTab" component={MainTab} />
                <MainStack.Screen
                    name="GroupCreateType"
                    component={GroupCreateType}
                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: colors.white,
                            height: metrics.topNavigationHeight,
                        },
                        title: '그룹 생성',
                        headerTintColor: colors.main,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 20,
                        },
                        headerLeft: () => (
                            <TouchableOpacity
                                style={styles.headerLeftTouchable}
                                onPress={() => {
                                    initialGroupCreate();
                                    navigation.navigate('MainTab');
                                }}>
                                <Image
                                    source={require('../../assets/images/chevron_left.png')}
                                    style={(styles.headerLeftImage, styles.black)}
                                />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <MainStack.Screen
                    name="GroupCreateName"
                    component={GroupCreateName}
                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: colors.white,
                            height: metrics.topNavigationHeight,
                        },
                        title: '그룹 생성',
                        headerTintColor: colors.main,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 20,
                        },
                        headerLeft: () => (
                            <TouchableOpacity
                                style={styles.headerLeftTouchable}
                                onPress={() => {
                                    initialGroupCreate();
                                    navigation.navigate('MainTab');
                                }}>
                                <Image
                                    source={require('../../assets/images/chevron_left.png')}
                                    style={(styles.headerLeftImage, styles.black)}
                                />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <MainStack.Screen
                    name="GroupCreateImage"
                    component={GroupCreateImage}
                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: colors.white,
                            height: metrics.topNavigationHeight,
                        },
                        title: '그룹 생성',
                        headerTintColor: colors.main,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 20,
                        },
                        headerLeft: () => (
                            <TouchableOpacity
                                style={styles.headerLeftTouchable}
                                onPress={() => {
                                    initialGroupCreate();
                                    navigation.navigate('MainTab');
                                }}>
                                <Image
                                    source={require('../../assets/images/chevron_left.png')}
                                    style={(styles.headerLeftImage, styles.black)}
                                />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <MainStack.Screen
                    name="TiccleDetail"
                    component={TiccleDetail}
                    options={({navigation}) => ({
                        headerStyle: {
                            backgroundColor: colors.main,
                            height: metrics.topNavigationHeight
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
                            <TouchableOpacity style={styles.headerLeftTouchable} 
                                onPress={() => {
                                    navigation.navigate('Home')
                                    console.log(ticcle)
                                    initialTiccle()
                                }}
                            >
                                <Image source={require('../../assets/images/chevron_left.png')}
                                    style={styles.headerLeftImage}/>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity style={styles.headerRightTouchable} onPress={()=> navigation.navigate('TiccleCreate')}>
                                <Text style={styles.headerRightText}>수정</Text>
                            </TouchableOpacity>
                        )
                    })}
                />
                <MainStack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerLeftTouchable: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    headerLeftImage: {
        resizeMode: 'cover',
        width: 12,
        height: 20,
        tintColor: colors.white,
    },
    black: {
        tintColor: colors.main,
        resizeMode: 'cover',
        width: 12,
        height: 20,
    },
    headerRightTouchable: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 40,
        marginRight: 14,
    },
    headerRightText: {
        color: colors.white,
        fontFamily: type.notoSansKR_Medium,
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 1,
    },
});

export default MainStackNavigator;
