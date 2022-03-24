// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

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
    console.log(auth)
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