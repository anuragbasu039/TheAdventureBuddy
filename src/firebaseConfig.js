// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAAPIXobsuQK7aiaB7FAv6z2j0OgKtCiRU",
    authDomain: "adventurebuddy-tab-web.firebaseapp.com",
    projectId: "adventurebuddy-tab-web",
    storageBucket: "adventurebuddy-tab-web.appspot.com",
    messagingSenderId: "1061406673318",
    appId: "1:1061406673318:web:0b98920c710c026b512767",
    measurementId: "G-V3Y10XRPSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
