import firebase from 'firebase/compat/app'; //adding 'compat' to resolve the error
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {      
    apiKey: "AIzaSyCNTkFCM45pWPZrBNDr0nDC3DSuF_fMjQg",
    authDomain: "crwn-db-7a24b.firebaseapp.com",
    projectId: "crwn-db-7a24b",
    storageBucket: "crwn-db-7a24b.appspot.com",
    messagingSenderId: "302477801628",
    appId: "1:302477801628:web:51a452d06ec57648175559",
    measurementId: "G-0505HP6HVR"
};

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
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



// import { initializeApp } from "@firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import "firebase/firestore";
// import "firebase/auth";
 
// const config = {
//     apiKey: "AIzaSyCNTkFCM45pWPZrBNDr0nDC3DSuF_fMjQg",
//     authDomain: "crwn-db-7a24b.firebaseapp.com",
//     projectId: "crwn-db-7a24b",
//     storageBucket: "crwn-db-7a24b.appspot.com",
//     messagingSenderId: "302477801628",
//     appId: "1:302477801628:web:51a452d06ec57648175559",
//     measurementId: "G-0505HP6HVR"
// };
 
// initializeApp(config);
 
// export const auth = getAuth();
// export const firestore = getFirestore();
 
// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
 
// export const signInWithGoogle = () => signInWithPopup(auth, provider);
 
// export default firebase;