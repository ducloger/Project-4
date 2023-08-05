// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// import { app, database } from "/Login and Register page/FirebaseConfig/config.js";
// import { ref, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// const auth = getAuth(app);

// var email = document.getElementById('email');
// var password = document.getElementById('password');
// var dob = document.getElementById('dob');
// var address = document.getElementById('address');
// var username = document.getElementById('username')

// // gender.addEventListener('change', function () {
// //   var selectedOption = this.options[this.selectedIndex];
// //   this.setAttribute('data-placeholder', selectedOption.value);
// //   console.log(selectedOption.value); // Output the selected value for debugging
// // });

// var registerBtn = document.getElementById("registerBtn");

// registerBtn.addEventListener("click", e => {
//   e.preventDefault();
//   var obj = {
//     email: email.value,
//     password: password.value,
//     dob: dob.value,
//     address: address.value,
//     username: username.value 

//   };

//   createUserWithEmailAndPassword(auth, obj.email, obj.password, obj.address, obj.dob, obj.username)
//     .then(function (userCredential) {
//       // User creation successful
//       const user = userCredential.user;

//       // Save the user data under the user's UID
//       const usersRef = ref(database, "users/" + user.uid);
//       set(usersRef, {
//         email: obj.email,
//         password: obj.password,
//         dob: obj.dob,
//         address: obj.address,
//         username: obj.username
//       })
//         .then(() => {
//           alert("Register Success")
//           window.location.assign('/Login and Register page/Login page/index.html');
//         })
//         .catch((error) => {
//           console.log("Error: " + error);
//         });
//     })
//     .catch(function (err) {
//       // Error occurred during user creation
//       alert("Error: " + err);
//     });
// });

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { app, database } from "/Login and Register page/FirebaseConfig/config.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const auth = getAuth(app);

var email = document.getElementById('email');
var password = document.getElementById('password');
var dob = document.getElementById('dob');
var address = document.getElementById('address');
var username = document.getElementById('username')

var registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", e => {
  e.preventDefault();
  var emailValue = email.value;
  var passwordValue = password.value;

  createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then(function (userCredential) {
      // User creation successful
      const user = userCredential.user;
      const usersRef = ref(database, "users/" + user.uid);

      // Save additional user data in the database
      set(usersRef, {
        email: emailValue,
        dob: dob.value,
        address: address.value,
        username: username.value
      })
        .then(() => {
          alert("Register Success")
          window.location.assign('/Login and Register page/Login page/index.html');
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    })
    .catch(function (err) {
      // Error occurred during user creation
      alert("Error: " + err.message);
    });
});
