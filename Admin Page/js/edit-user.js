import { getAuth} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { app, database } from "./config.js";
import { ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const dob = document.getElementById("dob");
    const address = document.getElementById("address");
    const saveButton = document.getElementById("saveButton");

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    console.log(userId);
    const userRef = ref(database, `users/${userId}`);

    onValue(userRef, (snapshot) => {
        const user = snapshot.val();

        username.value = user.username;
        email.value = user.email;
        password.value = user.password;
        dob.value = user.dob;
        address.value = user.address;
        formemail.value = user.email;
    });

    saveButton.addEventListener("click", () => {
        const updatedUser = {
            username: username.value,
            email: email.value,
            password: password.value,
            dob: dob.value,
            address: address.value
        };

        set(userRef, updatedUser)
            .then(() => {
                window.location.assign("/Admin Page/User.html")
                console.log("Data saved successfully!");
                alert("Change user information success!")
            })
            .catch((error) => {
                console.error("Error saving data:", error);
                alert("Change user information falied")
            });
    });
});
