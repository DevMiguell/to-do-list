import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZIPBYzE7KrpHb75IWjmjBhEeZzbxpTPs",
    authDomain: "fir-2-46a12.firebaseapp.com",
    databaseURL: "https://fir-2-46a12-default-rtdb.firebaseio.com",
    projectId: "fir-2-46a12",
    storageBucket: "fir-2-46a12.appspot.com",
    messagingSenderId: "693463152354",
    appId: "1:693463152354:web:8c0a5e0e576e81fe47d0bb",
    measurementId: "G-K4EWGV99Q1" 
}

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
firebase.analytics()