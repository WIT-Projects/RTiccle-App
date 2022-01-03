import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import colors from '../../theme/colors';
import {type} from '../../theme/fonts';
import MainTab from '../MainTab';
import GroupCreateName from '../../containers/group/create/GroupCreateName';
import GroupCreateImage from '../../containers/group/create/GroupCreateImage';
import GroupCreateType from '../../containers/group/create/GroupCreateType';
import TiccleDetail from '../../containers/ticcle/detail/TiccleDetail';
import metrics from '../../theme/metrices';
import useGroupCreate from '../../context/hook/useGroupCreate';
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
                    name="Home"
                    component={MainTab}
                />
                <MainStack.Screen
                    name="TiccleDetail"
                    component={TiccleDetail}
                    options={({navigation}) => ({
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
                            <TouchableOpacity
                                style={styles.headerLeftTouchable}
                                onPress={() => {
                                    navigation.navigate('Home');
                                    console.log(ticcle);
                                    initialTiccle();
                                }}>
                                <Image
                                    source={require('../../assets/images/chevron_left.png')}
                                    style={styles.headerLeftImage}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={styles.headerRightTouchable}
                                onPress={() =>
                                    navigation.navigate('TiccleCreate')
                                }>
                                <Text style={styles.headerRightText}>수정</Text>
                            </TouchableOpacity>
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
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default MainStackNavigator;
