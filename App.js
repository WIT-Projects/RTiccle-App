import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image} from 'react-native';

import Home from './src/containers/home';
import GroupCreate from './src/containers/group/create/GroupCreate';
import MyPage from './src/containers/user';
import { anonSignIn } from './src/firebase/auth';

import GroupDetail from './src/containers/group/detail';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigatior = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen 
            name="Home" 
            component={Home} 
            options={{
                title:"RTICCLE",
                headerLeft: () => (
                  <Image source={require('./src/assets/images/logo.png')}/>
                ),
                headerRight:() => (
                  <Image source={require('./src/assets/icon/searchBlack.png')}/>
                )
        }} />
        <HomeStack.Screen options={{ headerShown: false }} name="GroupDetail" component={GroupDetail} />
    </HomeStack.Navigator>
);

function App(){
  useEffect(() => {
    anonSignIn(); // tmp
  }, []);

  return(
    <>
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
                            <Image source={require('./src/assets/images/chevron-left.png')}
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
    </>
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

export default App;

