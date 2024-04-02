// PART1 : Initialize App

// Import Firebase App
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {  
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// PART2 : Create a key

// Import Firebase Auth
import { getAuth } from "firebase/auth";

// Initialize Firebase Auth and pass the app instance
const auth = getAuth(app); // Now explicitly passing the app instance

// PART3: Google Auth

// Import Google Auth Provider
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

// PART4: Connection With Database

// Import Firestore
import { getFirestore } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service, passing the app instance
const db = getFirestore(app);

// Exporting all the keys to be used in other files
export { auth, provider, db };
