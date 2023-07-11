import { getAuth} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { app, database } from "./config.js";
import { ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const dob = document.getElementById("dob");
    const gender = document.getElementById("gender");
    const address = document.getElementById("address");
    const saveButton = document.getElementById("saveButton");

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    console.log(userId);
    const userRef = ref(database, `users/${userId}`);

    onValue(userRef, (snapshot) => {
        const user = snapshot.val();

        firstname.value = user.firstName;
        lastname.value = user.lastName;
        gender.value = user.gender;
        dob.value = user.dob;
        address.value = user.address;
        formemail.value = user.email;
    });

    saveButton.addEventListener("click", () => {
        const updatedUser = {
            firstName: firstname.value,
            lastName: lastname.value,
            gender: gender.value,
            dob: dob.value,
            address: address.value
        };

        set(userRef, updatedUser)
            .then(() => {
                window.location.assign("/LoginRegisterWithFireBase/listusers.html")
                console.log("Data saved successfully!");
                alert("Change user information success!")
            })
            .catch((error) => {
                console.error("Error saving data:", error);
                alert("Change user information falied")
            });
    });
});
