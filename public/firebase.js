// // 🔥 Replace with your actual Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDmFWJI5O-Wa8-7-5tIdvhBF71SsMM-pAw",
//     authDomain: "lifeline-9ca52.firebaseapp.com",
//     projectId: "lifeline-9ca52",
//     storageBucket: "lifeline-9ca52.firebasestorage.app",
//     messagingSenderId: "654200181232",
//     appId: "1:654200181232:web:f813acfe36871567104d35",
//     measurementId: "G-TLMDYJC0QD"
//   };
  
//   // 🔥 Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const auth = firebase.auth();

// // Google Sign-In Function
// function signInWithGoogle() {
//   const provider = new firebase.auth.GoogleAuthProvider();

//   firebase.auth().signInWithPopup(provider)
//     .then((result) => {
//       console.log("User signed in:", result.user);
//       alert("Sign-in successful: " + result.user.displayName);
//       window.location.href = "home.html"; // Redirect after sign-in
//     })
//     .catch((error) => {
//       console.error("Error signing in:", error);
//       alert("Sign-in failed: " + error.message);
//     });
// }

// // Attach to Button
// document.addEventListener("DOMContentLoaded", function () {
//   const googleSignInButton = document.getElementById("googleSignIn");
//   if (googleSignInButton) {
//     googleSignInButton.addEventListener("click", signInWithGoogle);
//   }
// });
// <button id="googleSignIn">Sign in with Google</button>

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmFWJI5O-Wa8-7-5tIdvhBF71SsMM-pAw",
    authDomain: "lifeline-9ca52.firebaseapp.com",
    projectId: "lifeline-9ca52",
    storageBucket: "lifeline-9ca52.firebasestorage.app",
    messagingSenderId: "654200181232",
    appId: "1:654200181232:web:f813acfe36871567104d35",
    measurementId: "G-TLMDYJC0QD"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
