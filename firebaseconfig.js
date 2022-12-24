// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

console.log(process.env.API_KEY);
console.log(process.env.AUTH_DOMAIN);
console.log(process.env.PROJECT_ID);
console.log(process.env.STORAGE_BUCKET);
console.log(process.env.MESSAGING_SENDER_ID);
console.log(process.env.APP_ID);

// Your web app's Firebase configuration



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-6wssRcG3kABjTIxE4HFA06NxC3Jm4uc",
  authDomain: "m-ahammed.firebaseapp.com",
  databaseURL: "https://m-ahammed-default-rtdb.firebaseio.com",
  projectId: "m-ahammed",
  storageBucket: "m-ahammed.appspot.com",
  messagingSenderId: "362144885917",
  appId: "1:362144885917:web:aedb077d78c5a99e613874",
  measurementId: "G-9PYT738ZM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });

export { auth, db };
