import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const providerLogin = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
   

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }
    const verification = () => {
        return sendEmailVerification(auth.currentUser);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside state Changed', currentUser);
            if (currentUser === null || currentUser.emailVerified)
                setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        providerLogin,
        logOut,
        createUser,
        logIn,
        loading,
        updateUserProfile,
        verification,
        setLoading
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;