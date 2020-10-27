import firebase from 'firebase/app';
import 'firebase/firestore' 
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyB64nB4Qrk3697VCThoHf1-AL0ANc0MA_8",
    authDomain: "webapp-d8152.firebaseapp.com",
    databaseURL: "https://webapp-d8152.firebaseio.com",
    projectId: "webapp-d8152",
    storageBucket: "webapp-d8152.appspot.com",
    messagingSenderId: "579914867743",
    appId: "1:579914867743:web:00fad543419d876112e12a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;