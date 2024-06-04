
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAK9nJqN4WXJt5rbVUpHuLUy-lPkvCw-Vo",
  authDomain: "react-firebase-53b7c.firebaseapp.com",
  projectId: "react-firebase-53b7c",
  storageBucket: "react-firebase-53b7c.appspot.com",
  messagingSenderId: "1032713365744",
  appId: "1:1032713365744:web:965adcfb0d30353fb3fa35",
  measurementId: "G-FSMPCFX40J"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)