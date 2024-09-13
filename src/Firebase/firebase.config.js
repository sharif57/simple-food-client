// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-zMU0dWFNZV_6r61UaRgzTnDDX1iSH_Y",
  authDomain: "simplefood-f1f88.firebaseapp.com",
  projectId: "simplefood-f1f88",
  storageBucket: "simplefood-f1f88.appspot.com",
  messagingSenderId: "896720565939",
  appId: "1:896720565939:web:4684dcffedfa977c9722c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)