// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOJOaqfybzxxMh9SJOJ83-VauxH60rlT8",
  authDomain: "otp-less.firebaseapp.com",
  projectId: "otp-less",
  storageBucket: "otp-less.appspot.com",
  messagingSenderId: "853776607768",
  appId: "1:853776607768:web:6d56c53604659fc71c716d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Now you can use other Firebase services, for example:
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// signInWithPopup(auth, provider)
//     .then((result) => {
//         // Handle result
//     })
//     .catch((error) => {
//         // Handle errors
//     });
