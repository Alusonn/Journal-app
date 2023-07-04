// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIDMTUQWleH_WZnvtudQiZMDWAYDxO5fM",
  authDomain: "react-cursos-1588c.firebaseapp.com",
  projectId: "react-cursos-1588c",
  storageBucket: "react-cursos-1588c.appspot.com",
  messagingSenderId: "766584021109",
  appId: "1:766584021109:web:0cd33e85618d731cc0583c",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
