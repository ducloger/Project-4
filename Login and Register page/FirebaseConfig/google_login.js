import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { app } from "../FirebaseConfig/config.js";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const google_login_btn = document.getElementById("google-btn");
google_login_btn.addEventListener("click", e => {
  e.preventDefault();

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      // This gives you a Google access token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(userCredential);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = userCredential.user;
      console.log("Login successfully");

      // IdP data available using getAdditionalUserInfo(result)
      // ...

    })
    .catch((error) => {
      // Handle errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.customData.email;

      // The auth credential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
//Import the functions you need from the SDKs you need