import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA870GollR9MnFtxp9tcPrhAIkqO2cAjsc",
    authDomain: "clothing-store-db-8f418.firebaseapp.com",
    projectId: "clothing-store-db-8f418",
    storageBucket: "clothing-store-db-8f418.appspot.com",
    messagingSenderId: "211713861467",
    appId: "1:211713861467:web:50f0089d2b6d978582dc7e",
    measurementId: "G-81B3GVSMP4"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;