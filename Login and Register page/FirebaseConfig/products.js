import { getAuth,onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { app, database } from "./config.js"; // Assuming this is the correct path to your config.js file
import { ref, onValue, remove } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const auth = getAuth(app);

// Function to retrieve products from the database and populate the table
function getProducts() {
  const tableBody = document.querySelector("#dataTable tbody");

  // Retrieve the "products" node from the database
  const productRef = ref(database, "products");

  onValue(productRef, (snapshot) => {
    const products = snapshot.val();

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Iterate over each product
    for (const productId in products) {
      const product = products[productId];

      // Create a new row in the table
      const row = document.createElement("tr");

      // Create table cells and populate them with product data
      const idCell = document.createElement("td");
      idCell.textContent = product.id;
      row.appendChild(idCell);

      const NameCell = document.createElement("td");
      NameCell.textContent = product.name;
      row.appendChild(NameCell);

      const quantityCell = document.createElement("td");
      quantityCell.textContent = product.quantity;
      row.appendChild(quantityCell);

      const costCell = document.createElement("td");
      costCell.textContent = product.cost;
      row.appendChild(costCell);

      const priceCell = document.createElement("td");
      priceCell.textContent = product.price;
      row.appendChild(priceCell);

      const desCell = document.createElement("td");
      desCell.textContent = product.description;
      row.appendChild(desCell);

      const actionCell = document.createElement("td");
      const editLink = document.createElement("a");
      editLink.href = `edit-product.html?id=${productId}`; // Edit button/link URL with product ID
      editLink.textContent = "Edit";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", () => {
        deleteProduct(productId);
      });

      actionCell.appendChild(editLink);
      actionCell.appendChild(deleteButton);
      row.appendChild(actionCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    }
  });
}

function deleteProduct(productId) {
  const productRef = ref(database, `products/${productId}`);
  remove(productRef)
    .then(() => {
      console.log("Product deleted successfully!");
      // Optionally, you can perform additional actions after deleting the product.
      // For example, you could update the table or display a success message.
    })
    .catch((error) => {
      console.error("Error deleting product:", error);
    });
}

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

// Call the function to populate the table when the page loads
window.addEventListener("DOMContentLoaded", getProducts);
