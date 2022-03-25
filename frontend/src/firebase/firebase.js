// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCLxJPv5x7a_g4JNVMuAccNR2w5m3Jjfrs",

    authDomain: "ebook-reader-36940.firebaseapp.com",

    projectId: "ebook-reader-36940",

    storageBucket: "ebook-reader-36940.appspot.com",

    messagingSenderId: "23199241849",

    appId: "1:23199241849:web:73512e993064505e2966a8"

};


// Initialize Firebase

initializeApp(firebaseConfig);
export const auth = getAuth()

export function signUpWithGoogle() {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
}

export function getCurrentUserToken() {
    if (!auth.currentUser) {
        return null
    }
    return auth.currentUser.getIdToken()

}

export function signOut() {
    auth.signOut()
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }

        })
    }, [])
    return currentUser
}