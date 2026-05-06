import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZsi9CVlhrwfG9GDvxwK5bnFK0Orn36iQ",
  authDomain: "oz-projects-ldk.firebaseapp.com",
  projectId: "oz-projects-ldk",
  storageBucket: "oz-projects-ldk.firebasestorage.app",
  messagingSenderId: "211621119331",
  appId: "1:211621119331:web:502c31d971959bf4797f56"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);