import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../../theme/colors';
import {type} from '../../theme/fonts';
import {useNavigation} from '@react-navigation/native';

import Home from '../../containers/home/Home';
import GroupDetail from '../../containers/group/detail/GroupDetail';
import GroupUpdate from '../../containers/group/update/GroupUpdate';
import GroupCreateName from '../../containers/group/create/GroupCreateName';
import GroupCreateImage from '../../containers/group/create/GroupCreateImage';
import GroupCreateType from '../../containers/group/create/GroupCreateType';
import useGroupCreate from '../../context/hook/useGroupCreate';
import metrics from '../../theme/metrices';

const HomeStack = createStackNavigator();

const HomeStackNavigatior = () => {
    const {initialGroupCreate} = useGroupCreate();
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
                            onTouchEnd={() => {
                                navigateTo.navigate('SearchScreen');
                            }}
                            style={{marginRight: 24, padding: 4}}
                            source={require('../../assets/icon/searchBlack.png')}
                        />
                    ),
                })}
            />
            <HomeStack.Screen
                options={({navigation}) => ({headerShown: false})}
                name="GroupDetail"
                component={GroupDetail}
            />
            <HomeStack.Screen
                options={({navigation}) => ({headerShown: false})}
                name="GroupUpdate"
                component={GroupUpdate}
            />
            <HomeStack.Screen
                name="GroupCreateType"
                component={GroupCreateType}
                options={({navigation}) => ({
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
                                navigation.navigate('Home');
                            }}>
                            <Image
                                source={require('../../assets/images/chevron_left.png')}
                                style={(styles.headerLeftImage, styles.black)}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
            <HomeStack.Screen
                name="GroupCreateName"
                component={GroupCreateName}
                options={({navigation}) => ({
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
                                navigation.navigate('Home');
                            }}>
                            <Image
                                source={require('../../assets/images/chevron_left.png')}
                                style={(styles.headerLeftImage, styles.black)}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
            <HomeStack.Screen
                name="GroupCreateImage"
                component={GroupCreateImage}
                options={({navigation}) => ({
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
                                navigation.navigate('Home');
                            }}>
                            <Image
                                source={require('../../assets/images/chevron_left.png')}
                                style={(styles.headerLeftImage, styles.black)}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
        </HomeStack.Navigator>
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

export default HomeStackNavigatior;
