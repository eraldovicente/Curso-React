import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyCykFEdKpAG4d62b4b8QT0u39ElWeTljX8",
     authDomain: "react-app-cursos-dfec9.firebaseapp.com",
     databaseURL: "https://react-app-cursos-dfec9.firebaseio.com",
     projectId: "react-app-cursos-dfec9",
     storageBucket: "react-app-cursos-dfec9.appspot.com",
     messagingSenderId: "991501244942",
     appId: "1:991501244942:web:e3ad937cfc0ea6e38ffa5f"
   };

   firebase.initializeApp(firebaseConfig);

   const db = firebase.firestore();
   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

   export {
        db,
        googleAuthProvider,
        firebase
   }