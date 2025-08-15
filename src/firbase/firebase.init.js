// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBVe2rl1oZzAvGDQ8jPP3LTyg2cWcZAbE",
  authDomain: "plant-care-tracker-302f9.firebaseapp.com",
  projectId: "plant-care-tracker-302f9",
  storageBucket: "plant-care-tracker-302f9.firebasestorage.app",
  messagingSenderId: "159906638942",
  appId: "1:159906638942:web:e1ba73de9b78bcafadd8cf",
  measurementId: "G-WERWEJZR5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
