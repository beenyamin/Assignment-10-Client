import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx5h_QeRzrsXSKBLfJHn1wp1UGxdzL_MY",
  authDomain: "assignment-10-7d7a3.firebaseapp.com",
  projectId: "assignment-10-7d7a3",
  storageBucket: "assignment-10-7d7a3.appspot.com",
  messagingSenderId: "1003026668516",
  appId: "1:1003026668516:web:717fba11a77b8201d2c5f1"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth ;