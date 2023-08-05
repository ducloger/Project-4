import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { app, database } from "../Login page/config.js";
import {
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const auth = getAuth(app);

var name = document.getElementById("name");
var quantity = document.getElementById("quantity");
var cost = document.getElementById("cost");
var price = document.getElementById("price");
var description = document.getElementById("description");

var saveBtn = document.getElementById("saveButton");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var productRef = ref(database, "products");
  var newProductRef = push(productRef);

  var newProductKey = newProductRef.key;
  var productData = {
    id: newProductKey,
    name: name.value,
    quantity: quantity.value,
    cost: cost.value,
    price: price.value,
    description: description.value,
  };

  set(newProductRef, productData)
    .then(() => {
      console.log("New product added successfully!");
      // Optionally, you can perform additional actions after creating the product.
      // For example, you could redirect the user to a different page or display a success message.
    })
    .catch((error) => {
      console.error("Error adding new product:", error);
    });
});

var logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      window.location.assign("./login.html");
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
});

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

var imgLink = null ;

const storage = firebase.storage();

const inp = document.querySelector(".inp");

const progressbar = document.querySelector(".progress");

const img = document.querySelector(".img");

const fileData = document.querySelector(".filedata");

const loading = document.querySelector(".loading");
let file;

let fileName;

let progress;

let isLoading = false;

let uploadedFileName;



const selectImage = () => {
  inp.click();
};

const getImageData = (e) => {
  file = e.target.files[0];
  fileName = "product" + file.name;
  if (fileName) {
    fileData.style.display = "block";
  }
  fileData.innerHTML = fileName;
  console.log(file, fileName);
};

const downLoad = () => {
  storage.ref("productimage").getDownloadURL().then(url);
};

const uploadImage = () => {
  loading.style.display = "block";
  const storageRef = storage.ref().child("productimage");
  const folderRef = storageRef.child(fileName);
  const uploadtask = folderRef.put(file);
  uploadtask.on(
    "state_changed",
    (snapshot) => {
      console.log("Snapshot", snapshot.ref.name);
      progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progress = Math.round(progress);
      progressbar.style.width = progress + "%";
      progressbar.innerHTML = progress + "%";
      uploadedFileName = snapshot.ref.name;
    },
    (error) => {
      console.log(error);
    },
    () => {
      storage
        .ref("productimage")
        .child(uploadedFileName)
        .getDownloadURL()
        .then((url) => {
          console.log("URL", url);
          if (!url) {
            img.style.display = "none";
          } else {
            img.style.display = "block";
            loading.style.display = "none";
          }
          img.setAttribute("src", url);
        });
      console.log("File Uploaded Successfully");
    }
  );
};
