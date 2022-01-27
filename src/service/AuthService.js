import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from "@react-native-google-signin/google-signin";

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

    // Sign-in the user with the credential and link it with current user
    auth().currentUser.linkWithCredential(googleCredential)
    .then(res => {
      console.log("[Auth] Successfully link current user with google credential.");
    })
};

async function googleLogin() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
    // Sign-in the user with the credential
    // auth().signInWithCredential(googleCredential);
    auth().signInWithCredential(googleCredential)
        .then(res => {
          console.log(res);
          console.log("[Auth] Successfully sign in with google credential.");
        });
}

function logout () {
    return auth().signOut();
}

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
  googleLogin,
  getCurrentUser,
  getUserProfile,
  logout,
};
