import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { ToastAndroid } from 'react-native'

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
};

function googleSigninConfigure() {
  GoogleSignin.configure({
    // scopes: [],
    webClientId: '806729501348-db5jcn4ujv055iqfrj02i59cm0tmi102.apps.googleusercontent.com',
  })
};

async function googleLoginAndLink() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  // auth().signInWithCredential(googleCredential);
  auth().currentUser.linkWithCredential(googleCredential)
  .then(res => {
    ToastAndroid.show(res.user.uid, ToastAndroid.SHORT)
  })
};

export {
  anonSignIn,
  googleSigninConfigure,
  googleLoginAndLink,
};
