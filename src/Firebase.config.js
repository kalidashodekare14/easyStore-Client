// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM9gk-3uUjyIjHf2Fubsy18xMfBRRMKts",
  authDomain: "easystore-9fd6e.firebaseapp.com",
  projectId: "easystore-9fd6e",
  storageBucket: "easystore-9fd6e.appspot.com",
  messagingSenderId: "73354568965",
  appId: "1:73354568965:web:488cb920aa3fdc2134c36c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth