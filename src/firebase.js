import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/database";
import 'firebase/storage';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJdv-ew6Qacxjn42SD7PF7cQdTumkW0Y8",
    authDomain: "practicakuepagrupo16.firebaseapp.com",
    projectId: "practicakuepagrupo16",
    storageBucket: "practicakuepagrupo16.appspot.com",
    messagingSenderId: "462335394236",
    appId: "1:462335394236:web:f60f47767f565e0b2debb9"
  };
  // Initialize Firebase
  export const fireDb =  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  
   export{storage,firebase as default};