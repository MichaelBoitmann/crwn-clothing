// Firebase v9 was use on this application.
// Firebase library is use to gain access to a shared data structure.
// Any changes that will be done to these data will be automatically
// synchronized with the Firebase Cloud and with other clients in less 
// than a second.

import firebase from 'firebase/compat/app'; //adding 'compat' to resolve the error
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// The source of the content from apiKey down to measurementId were
// taken from Firebase Console.
const config = {      
    apiKey: "AIzaSyCNTkFCM45pWPZrBNDr0nDC3DSuF_fMjQg",
    authDomain: "crwn-db-7a24b.firebaseapp.com",
    projectId: "crwn-db-7a24b",
    storageBucket: "crwn-db-7a24b.appspot.com",
    messagingSenderId: "302477801628",
    appId: "1:302477801628:web:51a452d06ec57648175559",
    measurementId: "G-0505HP6HVR"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
