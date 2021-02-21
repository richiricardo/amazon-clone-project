// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMI_zaLUEFoc2t2dcbJ4jdhXLe-qBNHZw",
  authDomain: "clone-project-4638e.firebaseapp.com",
  projectId: "clone-project-4638e",
  storageBucket: "clone-project-4638e.appspot.com",
  messagingSenderId: "196609053209",
  appId: "1:196609053209:web:3a38809651b48200df9088",
  measurementId: "G-2PNJ0BRMS8"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };