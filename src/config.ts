import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyyq-ufgXrdoFc8RqrpGVELKZHgnJ5TMU",
  authDomain: "dictionary-app-a2604.firebaseapp.com",
  projectId: "dictionary-app-a2604",
  storageBucket: "dictionary-app-a2604.appspot.com",
  messagingSenderId: "885503976386",
  appId: "1:885503976386:web:93673a1d29b80e407b6c5b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
