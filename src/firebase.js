import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAN9OwycmP9pq3PPixAFZFFdy64dJKt2ds",
  authDomain: "wornogram.firebaseapp.com",
  databaseURL: "https://wornogram-default-rtdb.firebaseio.com",
  projectId: "wornogram",
  storageBucket: "wornogram.appspot.com",
  messagingSenderId: "1044588890042",
  appId: "1:1044588890042:web:16181566cd968f6a76ff83"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const storage = firebase.storage()
const db = firebaseApp.firestore()
export { auth, db, storage }