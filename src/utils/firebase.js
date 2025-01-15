import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnXIqAObWbfY4WBwKssoA_yrI53ykNGZ8", // Sizning Web API Key
  authDomain: "just-learning-1b94e.firebaseapp.com", // Project ID'ni asosida qo'lda tuzildi
  projectId: "just-learning-1b94e", // Sizning Project ID
  storageBucket: "just-learning-1b94e.appspot.com", // Project ID'ga asoslangan
  messagingSenderId: "102425858493", // Sizning Project Number
  appId: "1:102425858493:web:randomstring" // `appId` ni Firebase Console orqali to‘ldirishingiz kerak
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
