import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// console.log(process.env);

const firebaseConfig = {
     apiKey: process.env.REACT_APP_APIKEY,
     authDomain: process.env.REACT_APP_AUTHDOMAIN,
     databaseURL: process.env.REACT_APP_DATABASEURL,
     projectId: process.env.REACT_APP_PROJECTID,
     storageBucket: process.env.REACT_APP_STORAGEBUCKET,
     messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
     appId: process.env.REACT_APP_APPID
   };

// const firebaseConfigTesting = {
//      apiKey: "AIzaSyDSvS6yqydTyW2wvXG8cfllLG2EHLWhi60",
//      authDomain: "teste-app-396af.firebaseapp.com",
//      projectId: "teste-app-396af",
//      storageBucket: "teste-app-396af.appspot.com",
//      messagingSenderId: "910420210233",
//      appId: "1:910420210233:web:468db07a3f78f8298313e8"
//    };

//    if( process.env.NODE_ENV === 'test' ) {
//         // testing
//         firebase.initializeApp(firebaseConfigTesting);
//    } else {
//         // dev/prod
//         firebase.initializeApp(firebaseConfig);
//    }

   firebase.initializeApp(firebaseConfig);


   const db = firebase.firestore();
   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

   export {
        db,
        googleAuthProvider,
        firebase
   }