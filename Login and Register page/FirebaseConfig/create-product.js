import { getAuth,onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { app, database } from "../js/config.js";
import { ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const auth = getAuth(app);

var name = document.getElementById('name');
var quantity = document.getElementById('quantity');
var cost = document.getElementById('cost');
var price = document.getElementById('price');
var description = document.getElementById('description');

var saveBtn = document.getElementById("saveButton");

saveBtn.addEventListener("click", e => {
    e.preventDefault();
    var productRef = ref(database, 'products');
    var newProductRef = push(productRef);

    var newProductKey = newProductRef.key;
    var productData = {
        id: newProductKey,
        name: name.value,
        quantity: quantity.value,
        cost: cost.value,
        price: price.value,
        description: description.value
    };

    set(newProductRef, productData)
        .then(() => {
            console.log("New product added successfully!");
            // Optionally, you can perform additional actions after creating the product.
            // For example, you could redirect the user to a different page or display a success message.
        })
        .catch(error => {
            console.error("Error adding new product:", error);
        });
});

var logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", e =>{
    e.preventDefault();
    signOut(auth).then(() => {
        window.location.assign("./login.html");
    }).catch((err) => {
        console.log("Error: " + err);
    })
})

const userNameNav = document.getElementById("userNameNav");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const userId = user.uid;
    const userRef = ref(database, `users/${userId}`);

    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        const fullName = userData.firstName + " " + userData.lastName;
        userNameNav.textContent = fullName;
      }
    });
  } else {
    // User is signed out
    userNameNav.textContent = "";
  }
});