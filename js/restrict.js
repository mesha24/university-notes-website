import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

import {
  getAuth,
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnMFmRHILUrbNBuFIj3xZ9ussbhLKAAko",
  authDomain: "website-2364c.firebaseapp.com",
  projectId: "website-2364c",
  storageBucket: "website-2364c.appspot.com",
  messagingSenderId: "98392381307",
  appId: "1:98392381307:web:6a0b8c4a801e2301848fde",
  measurementId: "G-1GP8Q1V52N"
};














const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
        
onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
            } else {
                // User is not logged in
                window.location.href = "login.html"; // Redirect to login page
            }
        });
