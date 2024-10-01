import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase.config';

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loading, setLoaing] = useState(false)
    const provider = new GoogleAuthProvider();



    const registerSystem = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginSystem = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutSystem = () =>{
        return signOut(auth)
    }


    const googleAuthSystem = () => {
        return signInWithPopup(auth, provider)
    }




    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
        })
        return () => {
            unSubcribe()
        }
    }, [user])





    const authInfo = {
        user, loading, registerSystem, loginSystem, googleAuthSystem, logoutSystem
    }

    return (
        <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    )
};

export default AuthProvider;