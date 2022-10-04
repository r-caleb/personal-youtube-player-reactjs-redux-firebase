
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiVnUaM6uV3QGq7LUv33_XG3yeNd0ONHI",
  authDomain: "rc--clone-yt.firebaseapp.com",
  projectId: "rc--clone-yt",
  storageBucket: "rc--clone-yt.appspot.com",
  messagingSenderId: "576685436975",
  appId: "1:576685436975:web:fcc0ca96a1b956883cd6da",
};

const app = initializeApp(firebaseConfig);
export default app;
