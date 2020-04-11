const firebase = require ("firebase/app")
require ("firebase/auth")
require ("firebase/firestore")
require ("firebase/storage")
const Config = {
    apiKey: "AIzaSyAHqYM1xfEIsryWi4Ybt5gHGMWm5kboCsQ",
    authDomain: "authfacebook-a2895.firebaseapp.com",
    databaseURL: "https://authfacebook-a2895.firebaseio.com",
    projectId: "authfacebook-a2895",
    storageBucket: "authfacebook-a2895.appspot.com",
    messagingSenderId: "1061571976754",
    appId: "1:1061571976754:web:28744f48120c0103cf662b"
};
// Initialize Firebase
firebase.initializeApp(Config);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase,db,auth,storage}