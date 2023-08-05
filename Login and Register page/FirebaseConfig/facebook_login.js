// import { getAuth, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// import { app } from "./config.js";
// const provider = new FacebookAuthProvider();
// const auth = getAuth(app);
// const facebook_login_btn = document.getElementById("facebook-btn");
// facebook_login_btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // The signed-in user info.
//       const user = result.user;

//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//       const credential = FacebookAuthProvider.credentialFromResult(result);
//       const accessToken = credential.accessToken;

//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = FacebookAuthProvider.credentialFromError(error);

//       // ...
//     });
// });
