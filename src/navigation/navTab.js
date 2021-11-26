import React from 'react'
import { Image, StyleSheet, TouchableOpacity, Text  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../containers/home';
import GroupCreate from '../containers/group/create/GroupCreate';
import TiccleCreate from '../containers/ticcle/create';
import MyPage from '../containers/user';

import colors from '../theme/colors';
import metrics from '../theme/metrices';
import { type } from '../theme/fonts';

const NavTab = () => {

    const Tab = createBottomTabNavigator();

    return(
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="GroupCreate" component={GroupCreate} />
            <Tab.Screen name="티끌 작성" component={TiccleCreate}
                options={{
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
                        <TouchableOpacity style={styles.headerLeftTouchable}>
                            <Image source={require('../assets/images/chevron-left.png')}
                                style={styles.headerLeftImage}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight : () => (
                        <TouchableOpacity style={styles.headerRightTouchable}>
                            <Text style={styles.headerRightText}>저장</Text>
                        </TouchableOpacity>
                    )
                }}
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
        fontFamily: type.notoSansKR,
        fontSize : 20,

    }

})

export default NavTab