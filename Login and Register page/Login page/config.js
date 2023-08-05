import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsr_utRIiH2ZAqSH9YXguh7tR3jxNu32o",
  authDomain: "project-4-2940a.firebaseapp.com",
  databaseURL: "https://project-4-2940a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-4-2940a",
  storageBucket: "project-4-2940a.appspot.com",
  messagingSenderId: "830906532308",
  appId: "1:830906532308:web:fcb25680ccaaa106035641"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, database, storage };
