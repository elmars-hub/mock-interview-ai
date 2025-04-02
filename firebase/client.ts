// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR8eloT1DLR9XNOX5tx117TnJaNdJFd2Q",
  authDomain: "careercraft-b7554.firebaseapp.com",
  projectId: "careercraft-b7554",
  storageBucket: "careercraft-b7554.firebasestorage.app",
  messagingSenderId: "586857628089",
  appId: "1:586857628089:web:4a6fbf7314516624637668",
  measurementId: "G-5DYSP20NWH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
