// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA8sMYRja0NNCxGZzvwyDoJsR0PNWamKo",
  authDomain: "bookingreservationsystem.firebaseapp.com",
  projectId: "bookingreservationsystem",
  storageBucket: "bookingreservationsystem.appspot.com",
  messagingSenderId: "166341744549",
  appId: "1:166341744549:web:54a250f7c187c8f45afa4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;