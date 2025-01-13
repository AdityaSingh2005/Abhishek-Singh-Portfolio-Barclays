import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAkDdEbtAjFNHMf3R0xa-kgLPydbEAQG50",
  authDomain: "abhishekportfolio-6e8fa.firebaseapp.com",
  projectId: "abhishekportfolio-6e8fa",
  storageBucket: "abhishekportfolio-6e8fa.firebasestorage.app",
  messagingSenderId: "721474627832",
  appId: "1:721474627832:web:1db5291460c5a8e4f0730d",
  measurementId: "G-KMFSHLJ02W"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);