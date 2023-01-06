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
  async function signup(email, password, name) {
    const auth = getAuth();
    Cookies.set("biofidelicXQuizAuth", true, { expires: 1 });
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
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
    Cookies.set("biofidelicXQuizAuth", true, { expires: 1 });
    return signInWithEmailAndPassword(auth, email, password);
  }

  // login with google function
  function loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    Cookies.set("biofidelicXQuizAuth", true, { expires: 1 });
    return signInWithPopup(auth, googleProvider);
  }

  // login with facebook function
  function loginWithFacebook() {
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    Cookies.set("biofidelicXQuizAuth", true, { expires: 1 });
    return signInWithPopup(auth, facebookProvider);
  }

  // logout function
  function logout() {
    const auth = getAuth();
    Cookies.remove("biofidelicXQuizAuth");
    return signOut(auth);
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
