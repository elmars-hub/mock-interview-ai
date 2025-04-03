import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR8eloT1DLR9XNOX5tx117TnJaNdJFd2Q",
  authDomain: "careercraft-b7554.firebaseapp.com",
  projectId: "careercraft-b7554",
  storageBucket: "careercraft-b7554.firebasestorage.app",
  messagingSenderId: "586857628089",
  appId: "1:586857628089:web:4a6fbf7314516624637668",
  measurementId: "G-5DYSP20NWH",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
