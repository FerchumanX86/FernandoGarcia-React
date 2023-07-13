import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyC9gaCv2aa83SViJMWNwu6eDQcB4RvZ5uU",
//   authDomain: "mercado-pavo.firebaseapp.com",
//   projectId: "mercado-pavo",
//   storageBucket: "mercado-pavo.appspot.com",
//   messagingSenderId: "251884467547",
//   appId: "1:251884467547:web:2838e44cb7bf818678967e",
// };
