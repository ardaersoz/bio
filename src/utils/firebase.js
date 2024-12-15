// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBu1cuInZqH3zIxA_wt-B3auUyY7RBao0Y",
    authDomain: "admin-dashboard-review.firebaseapp.com",
    projectId: "admin-dashboard-review",
    storageBucket: "admin-dashboard-review.firebasestorage.app",
    messagingSenderId: "810660833325",
    appId: "1:810660833325:web:1c61f5cd88dfeeda9870a4",
    measurementId: "G-8Y3SXGV4Z1"
  };  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

