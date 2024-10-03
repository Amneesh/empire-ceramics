import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, addDoc, collection, doc, updateDoc, deleteDoc, getDocs, where } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getDatabase, set, get, child, query } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";   // ref
// Initialize Firestore


const firebaseConfig = {
  apiKey: "AIzaSyCkFIhhOe8Yrw7BHH0H-Yb_okogE2JKM4k",
  authDomain: "empire-detailing.firebaseapp.com",
  projectId: "empire-detailing",
  storageBucket: "empire-detailing.appspot.com",
  messagingSenderId: "85545938528",
  appId: "1:85545938528:web:aaa54caa0508336fe49d05",
  measurementId: "G-C7E5QTBJKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestoreInstance = getFirestore(app);
console.log(database);

console.log(app);

thankyouContainer.style.display = 'none';


const contactButton = document.getElementById('contact-form-button');
contactButton.addEventListener('click', (e) => {
  e.preventDefault();
  const jsonData = {
    personal_details: {
      first_name: document.getElementById('first-name').value || "No Value",
      last_name: document.getElementById('last-name').value || "No Value",
      email: document.getElementById('email').value || "No Value",
      phone: document.getElementById('phone').value || "No Value",
    },
    car_details: {
      vehicle_make: document.getElementById('vehicle-make').value || "No Value",
      vehicle_model: document.getElementById('vehicle-model').value || "No Value",
      vehicle_option: document.getElementById('vehicle-option').value || "No Value",
      service: document.getElementById('service').value || "No Value",
    }
  }
  addDoc(collection(firestoreInstance, 'user-details'), jsonData);
  contactForm.style.display = 'none';

  console.log(jsonData);
  contactForm.reset();
  thankyouContainer.style.display = 'flex';
});