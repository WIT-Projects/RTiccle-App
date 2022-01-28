import React, { useEffect, useState } from 'react';
import AppProvider from './src/context/provider/AppProvider';
import MainStackNavigator from './src/navigation/stack/MainStackNavigator';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/containers/login/LoginScreen';
import { getAllGroupIncludeImages } from './src/model/GroupModel';
import { getCurrentUser } from './src/service/AuthService';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => { // initialize app data
        if (getCurrentUser() == null) { // new user
            setTimeout(() => {
                SplashScreen.hide();
            }, 2000);
        } else { // logged-in user
            // initialize user data
            getAllGroupIncludeImages().then(() => {
                setIsLoggedIn(true);
                // Then hide splash screen
                setTimeout(() => {
                    SplashScreen.hide();
                }, 1000);
            })
        }
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
