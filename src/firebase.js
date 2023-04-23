// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM1w8NWqJQ0kC9qLT-Zez4e4iCdodFAtg",
    authDomain: "kerivadb.firebaseapp.com",
    databaseURL:"https://kerivadb-default-rtdb.firebaseio.com/",
    projectId: "kerivadb",
    storageBucket: "kerivadb.appspot.com",
    messagingSenderId: "891345563377",
    appId: "1:891345563377:web:ac9e5870ca6733732ec350"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

