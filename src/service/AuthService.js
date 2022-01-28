import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/functions';
import { GoogleSignin } from "@react-native-google-signin/google-signin";

var currentUser = getCurrentUser();
function getCurrentUser() {
  return auth().currentUser;
}

async function anonSignIn() {
    // [START auth_anon_sign_in]
    const user = await auth().signInAnonymously()
    currentUser = getCurrentUser();
    console.log('[Auth] Successfully created anonUserID');
    return new Promise(resolve => {
      resolve(user);
    })
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

    // Sign-in the user with the credential and link it with current user
    const user = await auth().currentUser.linkWithCredential(googleCredential)
    currentUser = getCurrentUser();
    console.log("[Auth] Successfully link current user with google credential.");
    return new Promise(resolve => {
      resolve(user);
    })
};

async function googleLogin() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
    // Sign-in the user with the credential
    // auth().signInWithCredential(googleCredential);
    const user = await auth().signInWithCredential(googleCredential);
    currentUser = getCurrentUser();
    console.log("[Auth] Successfully sign in with google credential.");
    return new Promise(resolve => {
      resolve(user);
    })
}

function logout () {
    currentUser = null;
    return auth().signOut();
}

function resetUserData(uid) {
    const functions = firebase.app().functions('asia-northeast2');
    functions.httpsCallable('clearDataOnCall')({uid: uid})
        .then((res) => {
          console.log(res);
        })
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
  currentUser,
  anonSignIn,
  googleSigninConfigure,
  googleLoginAndLink,
  googleLogin,
  getCurrentUser,
  getUserProfile,
  logout,
  resetUserData,
};
