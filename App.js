import React, { useEffect } from 'react';
import { anonSignIn, googleSigninConfigure, getCurrentUser } from './src/service/AuthService';
import AppProvider from './src/context/provider/AppProvider';
import MainStackNavigator from './src/navigation/stack/MainStackNavigator';
import SplashScreen from 'react-native-splash-screen';
import { getAllGroupIncludeImages } from './src/model/GroupModel';

function App() {
    useEffect(() => {
        googleSigninConfigure();
        if (getCurrentUser() == null) {
            anonSignIn();
        }
        getAllGroupIncludeImages() // init group data
        .then(SplashScreen.hide())
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
