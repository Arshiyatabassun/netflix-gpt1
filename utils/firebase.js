// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8MSzVsc9afR3az2zyDbLVkHkyf6sGLlw",
  authDomain: "netflixgpt-2ff65.firebaseapp.com",
  projectId: "netflixgpt-2ff65",
  storageBucket: "netflixgpt-2ff65.firebasestorage.app",
  messagingSenderId: "1066316135783",
  appId: "1:1066316135783:web:97869d83d53e15669c43c2",
  measurementId: "G-WL97TYD52M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();