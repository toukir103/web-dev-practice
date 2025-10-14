// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6GjcDLkz-IH-FQLdt8DKywU4ERmyztgY",
  authDomain: "fir-7b730.firebaseapp.com",
  projectId: "fir-7b730",
  storageBucket: "fir-7b730.firebasestorage.app",
  messagingSenderId: "836164171347",
  appId: "1:836164171347:web:4e312bf5fa9694ada6b8a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);