import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// import cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import "../services/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoURL: user.photoURL,
  };
};

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  const handleUser = (rawUser) => {
    if (rawUser) {
      console.log(rawUser);
      const user = formatUser(rawUser);
      console.log(user);
      setCurrentUser(user);
      // cookies.set("biofidelicX-quiz-auth", true, { expires: 1 });
      setLoading(false);
      return user;
    } else {
      // cookies.remove("biofidelicX-quiz-auth");
      setCurrentUser(false);
      return false;
    }
  };

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      handleUser(user);
    });

    return unsubscribe;
  }, []);

  // signup function
  async function signup(email, password, name) {
    const auth = getAuth();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      handleUser(res.user);
    } catch (error) {
      console.log(error);
    }
    // update profile
    // await updateProfile(auth.currentUser, {
    //   displayName: name,
    // });

    // const user = auth.currentUser;
    // setCurrentUser({
    //   ...user,
    // });
  }

  // login function
  async function login(email, password) {
    const auth = getAuth();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      handleUser(res.user);
    } catch (error) {
      console.log(error);
    }
  }

  // login with google function
  async function loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      const res = await signInWithPopup(auth, googleProvider);
      handleUser(res.user);
    } catch (error) {
      console.log(error);
    }
  }

  async function loginWithFacebook() {
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();

    try {
      const res = await signInWithPopup(auth, facebookProvider);
      handleUser(res.user);
    } catch (error) {
      console.log(error);
    }
  }

  // logout function
  async function logout() {
    const auth = getAuth();

    try {
      const res = await signOut(auth);
      handleUser(false);
    } catch (error) {
      console.log(error);
    }
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
