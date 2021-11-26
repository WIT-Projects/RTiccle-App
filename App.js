import React, { useEffect } from 'react';
import { anonSignIn } from './src/firebase/auth';

import NavTab from './src/navigation/navTab';


function App(){
  useEffect(() => {
    anonSignIn(); // tmp
  }, []);

  return(
    <>
      <NavTab></NavTab>
    </>

  ) 
}

export default App;

