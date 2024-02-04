// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBznrAHT6Ht7s6nozT2tfBz1zDQevnCyCo",
  authDomain: "netflixgpt-ab10b.firebaseapp.com",
  projectId: "netflixgpt-ab10b",
  storageBucket: "netflixgpt-ab10b.appspot.com",
  messagingSenderId: "986314609114",
  appId: "1:986314609114:web:2134491c86b5ed76c9f0e3",
  measurementId: "G-F4D04SJFW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth()