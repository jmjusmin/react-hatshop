import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgwbEd0o_j0a3wAbISrnK9N5sCBQn6fdc",
  authDomain: "hat-project-87b36.firebaseapp.com",
  projectId: "hat-project-87b36",
  storageBucket: "hat-project-87b36.appspot.com",
  messagingSenderId: "590600385487",
  appId: "1:590600385487:web:5b6ac400e287f0190858ba",
};

const firebaseApp = initializeApp(firebaseConfig);

//get google authentication
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
