import firebase from "firebase/app";
import "firebase/auth";

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

const auth = firebase.auth();

export {auth};