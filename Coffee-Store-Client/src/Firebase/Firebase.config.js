// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwLwU3y3ujtycKL5oaXdWDigdnaQ4SZt0",
  authDomain: "coffee-server-d7419.firebaseapp.com",
  projectId: "coffee-server-d7419",
  storageBucket: "coffee-server-d7419.appspot.com",
  messagingSenderId: "664185755621",
  appId: "1:664185755621:web:bc8b700c38cfa4aac9010c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth