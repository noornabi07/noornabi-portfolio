// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkm8do6yr1YwHC10vwAtOW4HY3a0scKO4",
  authDomain: "my-portfolio-4ad33.firebaseapp.com",
  projectId: "my-portfolio-4ad33",
  storageBucket: "my-portfolio-4ad33.appspot.com",
  messagingSenderId: "964092429988",
  appId: "1:964092429988:web:d6e90789636f72d65a0831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app