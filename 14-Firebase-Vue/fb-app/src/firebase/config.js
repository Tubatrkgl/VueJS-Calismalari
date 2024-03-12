// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBViMBvgnNS_lyrnK14tBVegl0H02u7BzM",
  authDomain: "vue3-ed6c7.firebaseapp.com",
  projectId: "vue3-ed6c7",
  storageBucket: "vue3-ed6c7.appspot.com",
  messagingSenderId: "679871384275",
  appId: "1:679871384275:web:4e8052fa4f3449ead22226"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
export {fb};