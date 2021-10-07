import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDzHvgZCssXHugrOrW1P6RsVFiiAp-Zfj8",
    authDomain: "yeonii-post.firebaseapp.com",
    projectId: "yeonii-post",
    storageBucket: "yeonii-post.appspot.com",
    messagingSenderId: "438001891619",
    appId: "1:438001891619:web:4856db72d77e27fb4ff496",
    measurementId: "G-SR2E48PMJE"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

const firestore = firebase.firestore();
const storage = firebase.storage();


export {auth, apiKey, firestore, storage};