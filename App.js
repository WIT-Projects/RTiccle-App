import React, { useEffect } from 'react';

import { anonSignIn } from './src/firebase/auth';

import AppProvider from './src/context/provider/AppProvider';
import TabNav from './src/navigation/TabNav';



function App(){
  useEffect(() => {
    anonSignIn(); // tmp
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

