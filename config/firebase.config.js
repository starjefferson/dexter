// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "dexter-dc46d.firebaseapp.com",
  projectId: "dexter-dc46d",
  storageBucket: "dexter-dc46d.firebasestorage.app",
  messagingSenderId: "585651291458",
  appId: "1:585651291458:web:761b407e10a8c9124a74db"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };