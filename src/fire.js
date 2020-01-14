import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBht2FXyOp1RV6u2iRNxXU0PtfRuJSGvwg",
    authDomain: "dscdatabase-dfbc7.firebaseapp.com",
    databaseURL: "https://dscdatabase-dfbc7.firebaseio.com",
    projectId: "dscdatabase-dfbc7",
    storageBucket: "dscdatabase-dfbc7.appspot.com",
    messagingSenderId: "329097086012",
    appId: "1:329097086012:web:b2b26750287b0741c3ef39",
    measurementId: "G-3D3EN19Y2H"
};

var fire = firebase.initializeApp(firebaseConfig)
export default fire;