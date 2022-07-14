// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
// import firebaseui from 'firebaseui'
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAKDSq-6CZaZYAzPRUHXBO7yrIwohd6ghU",
    authDomain: "clone-616af.firebaseapp.com",
    projectId: "clone-616af",
    storageBucket: "clone-616af.appspot.com",
    messagingSenderId: "270038675080",
    appId: "1:270038675080:web:acd39901aaa8a17677f93d",
    measurementId: "G-VC717HZ2D3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };