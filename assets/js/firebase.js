// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDoJvJvCilO95H8ujLKIR3kelgt6AFVDiU",
  authDomain: "haneul-ad6d7.firebaseapp.com",
  projectId: "haneul-ad6d7",
  storageBucket: "haneul-ad6d7.appspot.com",
  messagingSenderId: "589780360585",
  appId: "1:589780360585:web:3b8487a173d70b1328d558",
  measurementId: "G-HH0EV3LM13",
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("Page Loaded!");
  // Initialize Firebase (using compat mode)
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  console.log("Firebase Initialized!");
  // Handle Form Submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted");
      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      console.log("Collected values:", { name, email, message });
      // Save to Firestore
      db.collection("messages")
        .add({
          name: name,
          email: email,
          message: message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          console.log("Data successfully written to Firestore");
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset();
        })
        .catch((error) => {
          console.error("Error sending message: ", error);
          alert("Failed to send message. Try again!");
        });
    });
});