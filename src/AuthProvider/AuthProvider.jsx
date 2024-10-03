import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()



    const registerSystem = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginSystem = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutSystem = () => {
        return signOut(auth)
    }


    const googleAuthSystem = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)

            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("access-token", res.data.token)
                            setLoading(false)
                        }
                    })

            } else {
                // remove token
                localStorage.removeItem("access-token")
                setLoading(false)
            }
        })
        return () => {
            unSubscribe()
        }
    }, [axiosPublic])





    const authInfo = {
        user, loading, registerSystem, loginSystem, googleAuthSystem, logoutSystem
    }

    return (
        <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    )
};

export default AuthProvider;