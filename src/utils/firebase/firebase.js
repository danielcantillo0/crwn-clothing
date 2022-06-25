import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyj3Q-trPv1iU31ipRbca4QHc2ORR1Q70",

  authDomain: "crwn-clothing-db-d09c0.firebaseapp.com",

  projectId: "crwn-clothing-db-d09c0",

  storageBucket: "crwn-clothing-db-d09c0.appspot.com",

  messagingSenderId: "279343950690",

  appId: "1:279343950690:web:26ea0651ad552a8c399a3b",
};

// Initialize Firebase

const fbApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userDocRef;
};
