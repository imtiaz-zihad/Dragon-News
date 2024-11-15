import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  console.log(user);
  

  const createNewUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const logOut = () =>{
    return signOut(auth)
  }

  const userLogin =(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
  };

  useEffect(() =>{
   const unSubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
    })

    return () =>{
        unSubscribe();
    }
  },[])
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;