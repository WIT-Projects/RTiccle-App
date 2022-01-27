import React, { useEffect, useState } from 'react';
import AppProvider from './src/context/provider/AppProvider';
import MainStackNavigator from './src/navigation/stack/MainStackNavigator';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/containers/login/LoginScreen';
import {checkIsLoggedIn} from './src/service/AsyncStoageService'
import { getAllGroupIncludeImages } from './src/model/GroupModel';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => { // initialize app data
        checkIsLoggedIn().then((val) => {
            // Set is logged-in user
            setIsLoggedIn(val);
            if (val) { // logged-in user
                // initialize user data
                getAllGroupIncludeImages().then(() => {
                    // Then hide splash screen
                    SplashScreen.hide();
                })
            } else { // new user
                setTimeout(() => {
                    SplashScreen.hide();
                }, 2000);
            }
        })
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
