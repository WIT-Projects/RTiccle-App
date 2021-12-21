import React, { useEffect } from 'react';
import { anonSignIn, googleSigninConfigure, getCurrentUser } from './src/firebase/Auth';
import AppProvider from './src/context/provider/AppProvider';
import TabNav from './src/navigation/TabNav';

function App(){
  useEffect(() => {
    googleSigninConfigure();
    if (getCurrentUser() == null) {
      anonSignIn();
    }
  }, []);

  return(
    <>
    <AppProvider>
      <TabNav></TabNav>
    </AppProvider>
    </>
  )
}

export default App;
