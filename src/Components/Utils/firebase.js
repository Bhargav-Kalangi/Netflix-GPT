// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiUWUsuHtYgFgnMZ5cng9cPjJsGIJYep8",
  authDomain: "netflixgpt-84e26.firebaseapp.com",
  projectId: "netflixgpt-84e26",
  storageBucket: "netflixgpt-84e26.firebasestorage.app",
  messagingSenderId: "730531022539",
  appId: "1:730531022539:web:8ea96fb2962a6b4a68bd4e",
  measurementId: "G-6CXC59Z47P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
