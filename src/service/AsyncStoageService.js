import AsyncStorage from '@react-native-async-storage/async-storage';

    async function ASStoreData(value){
        try {
          await AsyncStorage.setItem('isLoggedIn', value)
        } catch (e) {
          console.log(e)
        }
    }

    async function checkIsLoggedIn(setState){
        try {
          const value = await AsyncStorage.getItem('isLoggedIn')
          if(value === 'undefined' || value === null || value === '') setState(false);
          }
         catch(e) {
          console.log(e)
        }
    }
  
  export {
    ASStoreData,
    checkIsLoggedIn,
  }

