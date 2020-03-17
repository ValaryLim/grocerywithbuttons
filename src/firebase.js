import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA4FuKA-VYzeUDc_Uo9LYq5U4RaVJ1NAGI",
    authDomain: "groceryproject-f33cb.firebaseapp.com",
    databaseURL: "https://groceryproject-f33cb.firebaseio.com",
    projectId: "groceryproject-f33cb",
    storageBucket: "groceryproject-f33cb.appspot.com",
    messagingSenderId: "922582811329",
    appId: "1:922582811329:web:6324e3aabd71d139410a40",
    measurementId: "G-RNDJ3VQE66",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;