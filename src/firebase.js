// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
const apiKey = process.env.REACT_APP_AUTH_KEY;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const appId = process.env.REACT_APP_AUTH_CLIENT_ID;
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId: "testing-c2e45",
  storageBucket: "testing-c2e45.appspot.com",
  messagingSenderId: "462800093110",
  appId,
  measurementId: "G-WGY04HE8CT",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth, signOut };
