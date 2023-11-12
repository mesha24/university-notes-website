import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


  

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
const provider = new GoogleAuthProvider(app);
const auth = getAuth();

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);

const createacctbtn = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");

const signInWithGoogleButton = document.getElementById("signInWithGoogle");

const signOutButton = document.getElementById("signOutBtn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

// Sign Up With Email and Password
createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        window.alert("Success! Account created.");
        window.location = "index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
        window.alert(errorMessage);
      });
  }
});

// Sign In With Email and Password
submitButton.addEventListener("click", function () {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      window.alert("Success! Welcome back!");
      window.location = "index.html";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Error occurred. Try again.");
    });
});

// Sign-Up / Sign-In With Google

const signInWithGoogle = () => {
  //THE POP-UP METHOD
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;

      window.alert("Success! Welcome back " + user.displayName);
      window.location = "./dashboard.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;

      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

signInWithGoogleButton.addEventListener("click", signInWithGoogle);

// Switch Up the Login and SignUp form
signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});
