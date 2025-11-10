import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STRROAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINDSENDERID,
  appId: import.meta.env.VITE_APPID,
measurementId: import.meta.env.VITE_MEASUREMENTID,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 export default auth 