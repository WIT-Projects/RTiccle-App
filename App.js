import React, { useEffect, useState } from 'react';
import { anonSignIn, googleSigninConfigure, getCurrentUser } from './src/service/AuthService';
import AppProvider from './src/context/provider/AppProvider';
import MainStackNavigator from './src/navigation/stack/MainStackNavigator';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/containers/login/LoginScreen';
import {checkIsLoggedIn} from './src/service/AsyncStoageService'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
    useEffect(() => {
        googleSigninConfigure();
        if (getCurrentUser() == null) {
            anonSignIn();
        }
        checkIsLoggedIn(setIsLoggedIn);
        SplashScreen.hide();
    }, []);

    return (
        <>
            <AppProvider>
                {isLoggedIn ?  <MainStackNavigator/> : <LoginScreen setIsLoggedIn={setIsLoggedIn}/>}
            </AppProvider>
        </>
    )
}

export default App;
