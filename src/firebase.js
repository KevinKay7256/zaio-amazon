import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwmHG5rprsXRGKRLEdfz_IDfDoolxLWkY",
  authDomain: "clone-63bce.firebaseapp.com",
  projectId: "clone-63bce",
  storageBucket: "clone-63bce.appspot.com",
  messagingSenderId: "1090943566388",
  appId: "1:1090943566388:web:aa649c49f9b0f9da36c061",
  measurementId: "G-8H5KRSPRHS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};