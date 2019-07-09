// src/firebase.js
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAmFONYlk-1nDFhGMpEmSJNqaPovCZAQOA",
    authDomain: "split-35408.firebaseapp.com",
    databaseURL: "https://split-35408.firebaseio.com",
    projectId: "split-35408",
    storageBucket: "",
    messagingSenderId: "442322691820",
    appId: "1:442322691820:web:370293ed22fd3abb"
  };

firebase.initializeApp(config);
export default firebase;