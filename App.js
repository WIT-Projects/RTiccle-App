import React, { useEffect } from 'react';
import { anonSignIn } from './src/firebase/auth';

import NavTab from './src/navigation/navTab';
import AppProvider from './src/context/provider/AppProvider';

function App(){
  useEffect(() => {
    anonSignIn(); // tmp
  }, []);

  return(
    <>
    <AppProvider>
      <NavTab></NavTab>
    </AppProvider>

    </>

  ) 
}

export default App;

