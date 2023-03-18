import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext({});
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([]);
    const [loaddata, setLoaddata] = useState(false)

    useEffect(() => {
        fetch(`https://team-work-sigma.vercel.app/teams/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setTeams(data);
                setLoaddata(false)
            })
            .catch(error => {
                console.log(user?.email);
            })
    }, [user, loaddata])
    // console.log(user)
    // console.log(teams);

    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = profile => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setuser(null)
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser?.uid) {
                setuser(currentUser)
            }
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        createAccount,
        updateUserInfo,
        user,
        loading,
        setLoading,
        signIn,
        signInWithGoogle,
        logOut,
        teams,
        setLoaddata,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;