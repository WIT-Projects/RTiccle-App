import AsyncStorage from '@react-native-async-storage/async-storage';

async function ASStoreData(value){
    try {
      await AsyncStorage.setItem('isLoggedIn', value);
    } catch (e) {
      console.log(e);
    }
}

/**
 * Check is logged-in user
 * @returns {Promise<Boolean>}
 */
async function checkIsLoggedIn(){
    try {
      var isLoggedIn = true;
      const value = await AsyncStorage.getItem('isLoggedIn');
      if(value === 'undefined' || value === null || value === '') isLoggedIn = false;

      return new Promise(resolve => {
        resolve(isLoggedIn);
      });

    } catch(e) {
      console.log(e);
    }
}

export {
    ASStoreData,
    checkIsLoggedIn,
}
