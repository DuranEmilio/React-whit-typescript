// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7RkZG3CWhIdC-dC8ITApGZxqVY1851d0",
  authDomain: "fb-crud-de7f3.firebaseapp.com",
  projectId: "fb-crud-de7f3",
  storageBucket: "fb-crud-de7f3.appspot.com",
  messagingSenderId: "1006347583215",
  appId: "1:1006347583215:web:2799958289898c4391a51a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);