import React, { useEffect } from 'react';
import { anonSignIn, googleSigninConfigure, getCurrentUser } from './src/service/AuthService';
import AppProvider from './src/context/provider/AppProvider';
import MainStackNavigator from './src/navigation/stack/MainStackNavigator';
import SplashScreen from 'react-native-splash-screen';
import {initAlgolia} from './src/service/SearchService';

function App() {
    useEffect(() => {
        // configure
        googleSigninConfigure();
        initAlgolia();
        
        if (getCurrentUser() == null) {
            anonSignIn();
        }
        SplashScreen.hide();
    }, []);
    

    return (
        <>
            <AppProvider>
                <MainStackNavigator></MainStackNavigator>
            </AppProvider>
        </>
    )
}

export default App;
