import React, { useEffect } from 'react';

import GroupDetail from './src/containers/group/detail/index';
import MyPage from './src/containers/user';
import { anonSignIn } from './src/firebase/auth';

function App(){
  useEffect(() => {
    anonSignIn(); // tmp
  }, []);

  return(
    <>
    <MyPage/>
    </>
  )
}

export default App;
