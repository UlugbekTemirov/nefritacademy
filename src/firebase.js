import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPO0-JP8UyEKaEpTMGI2oS20sO2kR1RB4",
  authDomain: "nefrit-academy.firebaseapp.com",
  projectId: "nefrit-academy",
  storageBucket: "nefrit-academy.appspot.com",
  messagingSenderId: "1075995193233",
  appId: "1:1075995193233:web:d2be5d7b22102abaae7430",
  measurementId: "G-QHY57LBD0K",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
