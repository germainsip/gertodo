import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDimsAhJGP1YKtgVyvrSuutIysr__TGPOw",
    authDomain: "gertodo-d43fd.firebaseapp.com",
    databaseURL: "https://gertodo-d43fd.firebaseio.com",
    projectId: "gertodo-d43fd",
    storageBucket: "gertodo-d43fd.appspot.com",
    messagingSenderId: "46862905721",
    appId: "1:46862905721:web:c121231ae879053f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

//   db.settings({ timestampsInSnapshots: true});

  export default db;