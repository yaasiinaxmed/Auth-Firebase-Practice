import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyByhU728ERKkR6ax-yDvZa0BzPFV4SyB6o",
  authDomain: "my-auth-300e2.firebaseapp.com",
  projectId: "my-auth-300e2",
  storageBucket: "my-auth-300e2.appspot.com",
  messagingSenderId: "330037361694",
  appId: "1:330037361694:web:45c07bc770bdd19d66020f",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("user wuu jiraa", user);
        setUser(user);
      } else {
        console.log("user majiro", user);
        setUser(null);
      }
    });
  }, []);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const signupWithEmailAndPass = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const logOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        console.log("user not found");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isLogged = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        signupWithEmailAndPass,
        user,
        isLogged,
        logOut,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
