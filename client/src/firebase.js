// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRo5yB_lDrPHdhnIr4OQmC8e7d-p0hrgQ",
  authDomain: "i-love-game-sept-2025-7c799.firebaseapp.com",
  projectId: "i-love-game-sept-2025-7c799",
  storageBucket: "i-love-game-sept-2025-7c799.firebasestorage.app",
  messagingSenderId: "485115772194",
  appId: "1:485115772194:web:a64ca9f0b07d972fdff97b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)