import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFb4OMZpGK_5RQRLve5d23x_NLu8eERb0",
    authDomain: "todo-react-152db.firebaseapp.com",
    projectId: "todo-react-152db",
    storageBucket: "todo-react-152db.appspot.com",
    messagingSenderId: "809997382876",
    appId: "1:809997382876:web:47e385bbbfa5d8020d7019",
    measurementId: "G-M3JTF14221"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
firebase.analytics();