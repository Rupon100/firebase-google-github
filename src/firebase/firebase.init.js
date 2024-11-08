// do not store config on the clint side ***Danger***


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvs8B3j4aktZIwQOdGtN-s5PpWnwyX5-I",
  authDomain: "simple-firebase2-259aa.firebaseapp.com",
  projectId: "simple-firebase2-259aa",
  storageBucket: "simple-firebase2-259aa.firebasestorage.app",
  messagingSenderId: "520331394037",
  appId: "1:520331394037:web:b3199c521aa4ac4b94bebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;