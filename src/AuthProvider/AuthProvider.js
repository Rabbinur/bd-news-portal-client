import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  //user login or logout and set user name of login user
  const [user, setUser] = useState(null);
  //reloading problem goto again login page
  const [loading, setLoading] = useState(true);

  //google sign in
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //update profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //verify email
  const verifyEMail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //set user name into navabr
  //create a observer for outside api call kore set korbe and goto manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(" inside auth state changes", currentUser);

      if (currentUser == null || currentUser.emailVerified) {
        setUser(currentUser);
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //set auth cause many  auth
  const authinfo = {
    user,
    providerLogin,
    logOut,
    createUser,
    signIn,
    updateUserProfile,
    verifyEMail,
    setLoading,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
