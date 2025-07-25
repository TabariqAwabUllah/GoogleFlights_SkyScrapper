import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'


GoogleSignin.configure({
    webClientId: '166956293591-0uhqra54o83a93vdfqdv204r2eleb7ii.apps.googleusercontent.com',
})

// console.log("Google Auth file");


export async function onGoogleButtonPress() {
  console.log("In google sign in");
  console.log("try 1");

  try {
    console.log("try 2");
    
    const see = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true})
    console.log("See",see);
    

    const signIn = await GoogleSignin.signIn()
    console.log("Sign IN", signIn);
    

    const idToken = signIn.idToken
    if(!idToken){
      throw new Error("Token not found of G sign in")
    }
    const googleCredentials = GoogleAuthProvider.credentials(idToken)
    const authResult = await signInWithCredential(getAuth(), googleCredentials);
    console.log('Firebase Auth Result:', authResult);

    return authResult;

    
  } catch (error) {
    console.log("errors in google login: ",error);
    
  }

}