// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO3_sMUGZ5R28_joEH0ChDk0F3tMdNTRM",
  authDomain: "react-dashboard-b2e29.firebaseapp.com",
  projectId: "react-dashboard-b2e29",
  storageBucket: "react-dashboard-b2e29.firebasestorage.app",
  messagingSenderId: "621163146887",
  appId: "1:621163146887:web:e7f62fcd3e89078ee41222",
  measurementId: "G-89DTKRHHM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);