// Import the functions you need from the SDKs you need
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { app } from "/Login and Register page/FirebaseConfig/config.js";

// Get the initialized Firebase app
const auth = getAuth(app);

var email = document.getElementById('email');
var password = document.getElementById('password');

var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", e => {
  e.preventDefault();

  var userEmail = email.value;
  var userPassword = password.value;

  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then(function (userCredential) {
      console.log("login success");
      window.location.assign('./index.html');
    }).catch(function (err) {
      alert("Error: " + err);
    })
});