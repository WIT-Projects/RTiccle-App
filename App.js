import React, { useEffect } from 'react';
import { anonSignIn, googleSigninConfigure, getCurrentUser } from './src/firebase/Auth';
import AppProvider from './src/context/provider/AppProvider';
import MainStackNavigator from './src/navigation/stack/MainStackNavigator';

function App() {
    useEffect(() => {
        googleSigninConfigure();
        if (getCurrentUser() == null) {
            anonSignIn();
        }
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
