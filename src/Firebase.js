// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxYX6ojosEgQoSNtZP7jbKmqrblDASew",
  authDomain: "realtor-clone-a7435.firebaseapp.com",
  projectId: "realtor-clone-a7435",
  storageBucket: "realtor-clone-a7435.appspot.com",
  messagingSenderId: "810207717629",
  appId: "1:810207717629:web:9ce3e0d08a4c9e7caa3694"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()