/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import app from '../Page/Firebase/Firebase.config'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth=getAuth(app);

const AuthProvider = ({ children }) => {
   const [user,setUser]=useState(null);
   const [loading,setLoading]=useState(true);

  // User object should be inside the function body

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const SignIn=(email,password)=>{

    return signInWithEmailAndPassword(auth,email,password);
  }
  useEffect(()=>{

   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
      
      console.log('auth state change',currentUser);
      setUser(currentUser);
      setLoading(false);
    
      

    });
    return()=>{
      unsubscribe();
    }
  })
  
  const logOut=()=>{
     return signOut(auth);
  }
const authInfo={
    user,
    createUser,
    SignIn,
    logOut,
    loading,
};
  
  return (
    
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>

  );

  };

export default AuthProvider;
