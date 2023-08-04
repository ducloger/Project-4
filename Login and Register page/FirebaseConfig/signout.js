import { signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js"

const logOutBtn = 

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});