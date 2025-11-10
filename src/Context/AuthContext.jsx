import { createContext, useContext, useState, useEffect } from "react";
import auth from "../Firebase/Firebase";
import React from "react";
import {
    onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signOut,
} from   "firebase/auth";


const context = createContext();
export const useAuth = () => useContext(context);

const AuthContext = ({children}) => {
 const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);

  const createEmailUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailUserSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfoUpdate = (info) => {
    setLoading(true);
    return updateProfile(auth.currentUser, info);
  };

  const googleUser = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  });
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    adminLoading,
    setAdminLoading,
    createEmailUser,
    emailUserSignIn,
    userInfoUpdate,
    googleUser,
    userSignOut,
  };
   return (<context.Provider value={authInfo}>
    {children}
    </context.Provider>)
}

export default AuthContext
