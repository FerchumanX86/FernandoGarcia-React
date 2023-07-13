import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9gaCv2aa83SViJMWNwu6eDQcB4RvZ5uU",
  authDomain: "mercado-pavo.firebaseapp.com",
  projectId: "mercado-pavo",
  storageBucket: "mercado-pavo.appspot.com",
  messagingSenderId: "251884467547",
  appId: "1:251884467547:web:2838e44cb7bf818678967e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


