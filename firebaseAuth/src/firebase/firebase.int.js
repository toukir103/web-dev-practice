// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDwUlPb8Vldl8lz3rBxnojCYuczghTbuU",
  authDomain: "simple-firebase-auth-e9e11.firebaseapp.com",
  projectId: "simple-firebase-auth-e9e11",
  storageBucket: "simple-firebase-auth-e9e11.firebasestorage.app",
  messagingSenderId: "1026831667245",
  appId: "1:1026831667245:web:41bfb11e267fb9fd67a8a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service 
export const auth = getAuth(app);