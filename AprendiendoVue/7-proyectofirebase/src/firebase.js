import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
const config = {
    apiKey: "AIzaSyAcN8Q1rq8G--QpU9mIO9WbYCgO00BT6n4",
    authDomain: "proyecto-29b4e.firebaseapp.com",
    databaseURL: "https://proyecto-29b4e.firebaseio.com",
    projectId: "proyecto-29b4e",
    storageBucket: "proyecto-29b4e.appspot.com",
    messagingSenderId: "1028259347294",
    appId: "1:1028259347294:web:a13be7b2d1c2f182caadcf"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore();
export default firebaseApp.firestore();