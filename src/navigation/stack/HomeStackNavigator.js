import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../../theme/colors';
import {type} from '../../theme/fonts';
import {useNavigation} from '@react-navigation/native';

import Home from '../../containers/home/Home';
import GroupDetail from '../../containers/group/detail/GroupDetail';
import GroupUpdate from '../../containers/group/update/GroupUpdate';
import GroupCreateName from '../../containers/group/create/GroupCreateName';
import GroupCreateImage from '../../containers/group/create/GroupCreateImage';
import useGroupCreate from '../../context/hook/useGroupCreate';
import metrics from '../../theme/metrices';

const HomeStack = createStackNavigator();

const HomeStackNavigatior = () => {
    const {initialGroupCreate, setGroupImage} = useGroupCreate();
    const navigateTo = useNavigation();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={({navigation}) => ({
                    title: 'RTICCLE',
                    headerLeft: () => <Image style={{marginLeft: 18}} source={require('../../assets/images/logo.png')} />,
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
            <HomeStack.Screen options={({navigation}) => ({headerShown: false})} name="GroupDetail" component={GroupDetail} />
            <HomeStack.Screen options={({navigation}) => ({headerShown: false})} name="GroupUpdate" component={GroupUpdate} />
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
                        fontFamily: type.notoSansKR_Bold,
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={styles.headerLeftTouchable}
                            onPress={() => {
                                initialGroupCreate();
                                navigation.goBack();
                            }}>
                            <Image source={require('../../assets/images/chevron_left.png')} style={styles.headerLeftImage} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={styles.headerRightTouchable}
                            onPress={() => {
                                initialGroupCreate();
                                navigation.navigate('Home');
                            }}>
                            <Text style={styles.headerRightText}>취소</Text>
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
                        fontFamily: type.notoSansKR_Bold,
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={styles.headerLeftTouchable}
                            onPress={() => {
                                navigation.goBack();
                                setGroupImage('');
                            }}>
                            <Image source={require('../../assets/images/chevron_left.png')} style={styles.headerLeftImage} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={styles.headerRightTouchable}
                            onPress={() => {
                                initialGroupCreate();
                                navigation.navigate('Home');
                            }}>
                            <Text style={styles.headerRightText}>취소</Text>
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
        paddingHorizontal: 18,
        paddingVertical:18,
    },
    headerLeftImage: {
        width: 11,
        height: 22,
    },
    headerRightTouchable: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
    },
    headerRightText: {
        fontFamily: type.notoSansKR_Medium,
        fontSize: 20,
    },
});

export default HomeStackNavigatior;
