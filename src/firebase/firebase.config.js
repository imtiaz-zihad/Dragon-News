// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZf8i1K00UI9S7LhmxOgDyhAXTBEL0lok',
  authDomain: 'dragon-news-auth-1846d.firebaseapp.com',
  projectId: 'dragon-news-auth-1846d',
  storageBucket: 'dragon-news-auth-1846d.firebasestorage.app',
  messagingSenderId: '382654025465',
  appId: '1:382654025465:web:efb09d2661680dc43c5c2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app