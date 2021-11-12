import auth from "@react-native-firebase/auth";
import {ToastAndroid} from 'react-native'

function anonSignIn() {
    // [START auth_anon_sign_in]
    auth().signInAnonymously()
      .then((res) => {
        // Signed in
        ToastAndroid.show(res.user.uid, ToastAndroid.SHORT)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT)
      });
    // [END auth_anon_sign_in]
}

function googleLoginAndLink() {
    var provider = auth.GoogleAuthProvider;
    ToastAndroid.show("google", ToastAndroid.SHORT)
    //const credential = auth.GoogleAuthProvider.credential(
      //googleUser.getAuthResponse().id_token);
    //ToastAndroid.show(credential, ToastAndroid.SHORT)
}

export { 
    anonSignIn,
    googleLoginAndLink,
}