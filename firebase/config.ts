// firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgRydibwDoT5Uv3udGjhhlt5SZQqRC-lE",
  authDomain: "forms-e7f91.firebaseapp.com",
  projectId: "forms-e7f91",
  storageBucket: "forms-e7f91.firebasestorage.app",
  messagingSenderId: "368321063852",
  appId: "1:368321063852:web:65e0086b2ec4901aa2e809",
  measurementId: "G-24HH46YBBM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
