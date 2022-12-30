// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtaaVImdYykXPgBNZpoie5vzY0rdYBNow",
  authDomain: "taskquery.firebaseapp.com",
  projectId: "taskquery",
  storageBucket: "taskquery.appspot.com",
  messagingSenderId: "37095938175",
  appId: "1:37095938175:web:5569ae4d7481fffab1c74a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
/**
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
 */
