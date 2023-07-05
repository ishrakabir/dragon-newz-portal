import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerLogin = provider => {
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside state Changed', currentUser);
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        return signOut(auth);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { user, providerLogin, logOut, createUser, logIn };
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;