// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-jYjZhiZDfBJlNYEuTPLLz0PMl5DBgdo",
  authDomain: "restcountryapi-challenge.firebaseapp.com",
  projectId: "restcountryapi-challenge",
  storageBucket: "restcountryapi-challenge.appspot.com",
  messagingSenderId: "771401850773",
  appId: "1:771401850773:web:08ef97609a9f6af762e09c",
  measurementId: "G-H4ZXLT036L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export {database}
