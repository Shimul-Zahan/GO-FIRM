import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import auth from './firebase.config';
import Password from 'antd/es/input/Password';

export const MyContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvide = new GoogleAuthProvider();

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvide)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const storedItem = localStorage.getItem("GOFIRM-LOGIN");
    const login_user = JSON.parse(storedItem);
    const [state, setState]=useState(false)

    const contenxtProperty = {
        user,
        setUser,
        loading,
        googleLogin,
        logOut,
        login_user,
        setState,state
    }

    return (
        <MyContext.Provider value={contenxtProperty}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthProvider