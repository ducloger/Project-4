var messagesRef = firebase.database().ref("Checking");
document.getElementById("contactForm").addEventListener("submit", submitForm);
//uploading file in storage
function uploadimage() {
  var type = getInputVal("types");
  var storage = firebase.storage();
  var file = document.getElementById("files ").files[0];
  var storageref = storage.ref();
  var thisref = storageref.child(type).child(file.name).put(file);
  thisref.on(
    "state_changed",
    function (snapshot) {},
    function (error) {},
    function () {
      // Uploaded completed successfully, now we can get the download URL
      thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //getting url of image
        document.getElementById("url ").value = downloadURL;
        alert("uploaded successfully");
        saveMessage(downloadURL);
      });
    }
  );

  // Get values
  var url = getInputVal("url");
  // Save message
  // saveMessage(url);
}
function getInputVal(id) {
  document.getElementById("contactForm").reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase database
function saveMessage(url) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    imageurl: url,
  });
}
