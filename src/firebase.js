// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';


// ✅ Your Firebase configuration (copied from your console)
const firebaseConfig = {
    apiKey: "your api key",
    authDomain: "your domain",
    projectId: "project id",
    storageBucket: "your storage bucket",
    messagingSenderId: "12345",
    appId: "your app id",
    measurementId: "measurement id"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Initialize Authentication and Google provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// 🔹 Export them for use in other files
export { auth, googleProvider };
