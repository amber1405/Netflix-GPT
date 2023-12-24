// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgmBF1BiQSGGviGLAVqXwpZklrbCYTAA0",
  authDomain: "netflixgpt-9e5c7.firebaseapp.com",
  projectId: "netflixgpt-9e5c7",
  storageBucket: "netflixgpt-9e5c7.appspot.com",
  messagingSenderId: "470542107107",
  appId: "1:470542107107:web:eafcbe62194c61a710e0d6",
  measurementId: "G-JGL594027Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
