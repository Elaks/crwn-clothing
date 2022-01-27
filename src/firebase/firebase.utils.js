import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCruT7ggbp7v1kf1Z_ethbzkH1pUFEQnLQ",
  authDomain: "crwn-db-9ab8f.firebaseapp.com",
  projectId: "crwn-db-9ab8f",
  storageBucket: "crwn-db-9ab8f.appspot.com",
  messagingSenderId: "1006276875997",
  appId: "1:1006276875997:web:2f2252c9f0955d5beb6d34",
  measurementId: "G-T4GWSRG5LY",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
