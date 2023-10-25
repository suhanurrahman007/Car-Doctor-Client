// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaXSnsnNgt-nNZ9kJIyJD9HXM4UpE-xdk",
    authDomain: "car-doctor-e3550.firebaseapp.com",
    projectId: "car-doctor-e3550",
    storageBucket: "car-doctor-e3550.appspot.com",
    messagingSenderId: "151430540718",
    appId: "1:151430540718:web:aef3d633a1726eeffc2c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth