// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cbea7.firebaseapp.com",
  projectId: "mern-estate-cbea7",
  storageBucket: "mern-estate-cbea7.appspot.com",
  messagingSenderId: "783174852931",
  appId: "1:783174852931:web:03ab51daa0ecffc45acff6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);