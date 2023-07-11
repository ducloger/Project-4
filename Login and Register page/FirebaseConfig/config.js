// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4D_21u-cSO_819QhWEXP1qaxhYzB26eQ",
  authDomain: "project-4-2940a.firebaseapp.com",
  databaseURL: "https://project-4-2940a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-4-2940a",
  storageBucket: "project-4-2940a.appspot.com",
  messagingSenderId: "830906532308",
  appId: "1:830906532308:web:fcb25680ccaaa106035641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
