// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0xiu-XhCAoi3PyInwCobE_MAUkixYyNc",
  authDomain: "netflixgpt-8720c.firebaseapp.com",
  projectId: "netflixgpt-8720c",
  storageBucket: "netflixgpt-8720c.firebasestorage.app",
  messagingSenderId: "624068173858",
  appId: "1:624068173858:web:c17274b72cfc9a2f166a7b",
  measurementId: "G-9N6S5J56M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();