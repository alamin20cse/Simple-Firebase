// Do not store config in the client side



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Rj4SA_Rj-00SASo-EuVduKPfCHvV2Rg",
  authDomain: "simpleproject-8150b.firebaseapp.com",
  projectId: "simpleproject-8150b",
  storageBucket: "simpleproject-8150b.firebasestorage.app",
  messagingSenderId: "1043748998119",
  appId: "1:1043748998119:web:d1fef84452c32d17738b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;