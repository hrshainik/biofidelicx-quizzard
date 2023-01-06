import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import "../services/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // signup function
  function signup(email, password, name) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        Cookies.set("biofidelicXQuizAuth", true, { expires: 1 });
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });

    // update profile
    updateProfile(auth.currentUser, {
      displayName: name,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  // login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        Cookies.set("biofidelicXQuizAuth", true, { expires: 1 });
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // login with google function
  function loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        Cookies.set("biofidelicXQuizAuth", true, { expires: 1 });
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // login with facebook function
  function loginWithFacebook() {
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, facebookProvider)
      .then((result) => {
        Cookies.set("biofidelicXQuizAuth", true, { expires: 1 });
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth)
      .then(() => {
        Cookies.remove("biofidelicXQuizAuth");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginWithGoogle,
    loginWithFacebook,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
