import { getAuth, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { app, database } from "./config.js"; // Assuming this is the correct path to your config.js file
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const auth = getAuth(app);

// Function to retrieve users from the database and populate the table
function getUsers() {
  const tableBody = document.querySelector("#dataTable tbody");

  // Retrieve the "users" node from the database
  const usersRef = ref(database, "users");

  onValue(usersRef, (snapshot) => {
    const users = snapshot.val();

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Iterate over each user
    for (const userId in users) {
      const user = users[userId];

      // Create a new row in the table
      const row = document.createElement("tr");

      // Create table cells and populate them with user data
      const userNameCell = document.createElement("td");
      userNameCell.textContent = user.username;
      row.appendChild(userNameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;
      row.appendChild(emailCell);

      const passwordCell = document.createElement("td");
      passwordCell.textContent = user.password;
      row.appendChild(passwordCell);

      const addressCell = document.createElement("td");
      addressCell.textContent = user.address;
      row.appendChild(addressCell);

      const dobCell = document.createElement("td");
      dobCell.textContent = user.dob;
      row.appendChild(dobCell);

      const editCell = document.createElement("td");
      const editLink = document.createElement("a");
      editLink.href = `edit-user.html?id=${userId}`; // Edit button/link URL with user ID
      editLink.textContent = "Edit";
      editCell.appendChild(editLink);
      row.appendChild(editCell);
      
      // Append the row to the table body
      tableBody.appendChild(row);
    }
  });
}

// var logoutBtn = document.getElementById("logoutBtn");
// logoutBtn.addEventListener("click", e =>{
//     e.preventDefault();
//     signOut(auth).then(() => {
//         window.location.assign("./login.html");
//     }).catch((err) => {
//         console.log("Error: " + err);
//     })
// })

// const userNameNav = document.getElementById("userNameNav");

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in
//     const userId = user.uid;
//     const userRef = ref(database, `users/${userId}`);

//     onValue(userRef, (snapshot) => {
//       const userData = snapshot.val();
//       if (userData) {
//         const fullName = userData.firstName + " " + userData.lastName;
//         userNameNav.textContent = fullName;
//       }
//     });
//   } else {
//     // User is signed out
//     userNameNav.textContent = "";
//   }
// });

// Call the function to populate the table when the page loads
window.addEventListener("DOMContentLoaded", getUsers);
