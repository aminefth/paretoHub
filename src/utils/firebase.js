

// Initialize Firebase



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "paretohub.firebaseapp.com",
  projectId: "paretohub",
  storageBucket: "paretohub.appspot.com",
  messagingSenderId: "280196376940",
  appId: "1:280196376940:web:330b783731c2f7d75eeb49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
