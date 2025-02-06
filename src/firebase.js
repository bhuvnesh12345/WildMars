// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASTqKvn26jdb8IfwF9ZVxf-HGYpfav8tA",
  authDomain: "shoes-collection-ab099.firebaseapp.com",
  projectId: "shoes-collection-ab099",
  storageBucket: "shoes-collection-ab099.firebasestorage.app",
  messagingSenderId: "189677176436",
  appId: "1:189677176436:web:ffd5318b96e4324455b321",
  measurementId: "G-M9HLTD8K09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export default db;