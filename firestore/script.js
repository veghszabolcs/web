
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr2Wc4zFAyMC3jFCB1dnbJgedrpoqtAAA",
    authDomain: "vendegkonyv-d57f9.firebaseapp.com",
    projectId: "vendegkonyv-d57f9",
    storageBucket: "vendegkonyv-d57f9.appspot.com",
    messagingSenderId: "784655226551",
    appId: "1:784655226551:web:b5bbdb93034a5b11509f32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore(app);

document.getElementById('message-form').addEventListener('submit', function (e) {
    e.preventDefault
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    db.collection('vendegkonyv').add({
        nev: name,
        uzenet: message
    })
        .then((docRef) => {
            console.log(docRef.id);
        })
        .catch((error) => {
            console.error(error);
        });
});