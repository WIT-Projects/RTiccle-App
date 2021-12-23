import React from 'react';
import { Image,StyleSheet,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../../theme/colors';
import { type } from '../../theme/fonts';
import metrics from '../../theme/metrices';

import Home from '../../containers/home';
import GroupDetail from '../../containers/group/detail';
import GroupCreateName from '../../containers/group/create/GroupCreateName';
import GroupCreateImage from '../../containers/group/create/GroupCreateImage';

const HomeStack = createStackNavigator();

const HomeStackNavigatior = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen 
            name="Home" 
            component={Home} 
            options={ ({navigation}) =>  ({
                title:"RTICCLE",
                headerLeft: () => (
                    <Image style={{marginLeft: 18}} source={require('../../assets/images/logo.png')}/>
                ),
                headerRight:() => (
                    <Image style={{marginRight: 28}} source={require('../../assets/icon/searchBlack.png')}/>
                ),
        })} />
        <HomeStack.Screen options={{ headerShown: false }} name="GroupDetail" component={GroupDetail} />
        <HomeStack.Screen 
            name="GroupCreateName"
            component={GroupCreateName}
            options={ ({navigation}) =>  ({
                headerStyle :{
                backgroundColor: colors.white,
                height : metrics.topNavigationHeight,
                },
                title: '그룹 생성',
                headerTintColor : colors.main,
                headerTitleAlign : 'center',
                headerTitleStyle : {
                fontSize : 20,
                },
                headerLeft : () => (
                    <TouchableOpacity style={styles.headerLeftTouchable} onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../../assets/images/chevron_left.png')}
                            style={styles.headerLeftImage, styles.black}
                        />
                    </TouchableOpacity>
                ),
        })} />
        <HomeStack.Screen options={{ headerShown: false }}
            name="GroupCreateImage"
            component={GroupCreateImage}
            options={ ({navigation}) =>  ({
                headerStyle :{
                backgroundColor: colors.white,
                height : metrics.topNavigationHeight,
                },
                title: '그룹 생성',
                headerTintColor : colors.main,
                headerTitleAlign : 'center',
                headerTitleStyle : {
                fontSize : 20,
                },
                headerLeft : () => (
                    <TouchableOpacity style={styles.headerLeftTouchable} onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../../assets/images/chevron_left.png')}
                            style={styles.headerLeftImage, styles.black}
                        />
                    </TouchableOpacity>
                ),
        })}/>
    </HomeStack.Navigator>
);

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
    },
    black: {
        tintColor: colors.main,
        resizeMode : 'cover',
        width : 12, 
        height: 20, 
    },
    headerRightTouchable : {
        alignItems: 'center',
        justifyContent : 'center',
        width : 60,
        height : 40,
        marginRight : 14,
    },
    headerRightText : {
        color : colors.white,
        fontFamily: type.notoSansKR_Medium,
        fontSize : 20,
        lineHeight : 24,
        marginBottom: 1,
    }

})

export default HomeStackNavigatior;
