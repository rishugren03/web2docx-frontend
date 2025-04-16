// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf2ZS6JWkbRUvczz-79CRrIHxSdwzVY-E",
  authDomain: "web2docx.firebaseapp.com",
  projectId: "web2docx",
  storageBucket: "web2docx.firebasestorage.app",
  messagingSenderId: "461098100769",
  appId: "1:461098100769:web:8c77739f727fb76f909b60",
  measurementId: "G-0HK0EWZDPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const analytics = getAnalytics(app);

export { auth, analytics, googleProvider, githubProvider };
