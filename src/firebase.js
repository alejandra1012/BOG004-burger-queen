// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6tC6kx49bmpt6Li2Ygg7Oz10BwX2i5sg",
  authDomain: "burguer-queen-bqf1.firebaseapp.com",
  projectId: "burguer-queen-bqf1",
  storageBucket: "burguer-queen-bqf1.appspot.com",
  messagingSenderId: "871500216218",
  appId: "1:871500216218:web:5edd0d80cda26059f1ec23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export{
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
}
