// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VIte_apiKey,
  authDomain: import.meta.env.VIte_authDomain,
  projectId: import.meta.env.VIte_projectId,
  storageBucket: import.meta.env.VIte_storageBucket,
  messagingSenderId: import.meta.env.VIte_messagingSenderId,
  appId: import.meta.env.VIte_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app