import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/database";
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
  const fireDb =  firebase.initializeApp(firebaseConfig);
   export default  fireDb.database().ref();