import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { ToastAndroid } from 'react-native'

function anonSignIn() {
    // [START auth_anon_sign_in]
    auth().signInAnonymously()
      .then((res) => {
        // Signed in
        console.log('[Auth] Successfully created anonUserID')
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log('[Auth] Failed to create anonUserID with ex:', errorMessage);t
      });
    // [END auth_anon_sign_in]
};

function googleSigninConfigure() {
  firestore().collection("SignIn").doc("Google").get()
      .then((doc) => {
        GoogleSignin.configure({
          webClientId: doc.data().webClientId,
        })
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

function getCurrentUser() {
  return auth().currentUser;
}

function getUserProfile(setState) {
  const user = auth().currentUser;
  if (user !== null) {
    user.providerData.forEach((profile) => {
      const userName = profile.displayName;
      const userEmail = profile.email;
      setState({
        name : userName,
        email : userEmail,
      });
    });
  }
}

export {
  anonSignIn,
  googleSigninConfigure,
  googleLoginAndLink,
  getCurrentUser,
  getUserProfile
};
