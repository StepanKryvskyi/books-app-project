import { initializeApp } from "firebase/app";
import { EmailAuthProvider } from "firebase/auth";

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "dremteam-book-app-project.firebaseapp.com",
  projectId: "dremteam-book-app-project",
  storageBucket: "dremteam-book-app-project.appspot.com",
  messagingSenderId: "589433305065",
  appId: "1:589433305065:web:329326ad45cf10e516fd78"
};

export const app = initializeApp(firebaseConfig);
export const emailAuthProvider = new EmailAuthProvider();