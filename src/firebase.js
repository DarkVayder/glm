import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXYF1Y5o2Tjq8TscWHIBtitY44jZh5GC0",
    authDomain: "ever-a68a5.firebaseapp.com",
    projectId: "ever-a68a5",
    storageBucket: "ever-a68a5.appspot.com",
    messagingSenderId: "930188243159",
    appId: "1:930188243159:web:5fe408c01fa5ce6ed6c092"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
