import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyC53BMnkLSI7hw9StqdtpBHDakJshlc10Y",
    authDomain: "marioprojetcs.firebaseapp.com",
    databaseURL: "https://marioprojetcs.firebaseio.com",
    projectId: "marioprojetcs",
    storageBucket: "marioprojetcs.appspot.com",
    messagingSenderId: "979875866245"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;