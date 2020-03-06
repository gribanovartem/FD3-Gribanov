
import * as firebase from "firebase/app";
import 'firebase/storage'; 


const config = {
    apiKey: "AIzaSyD9NIAz1hpx5LdZTLMrhMga1l3rQkqYZHc",
    authDomain: "shop-gribanov.firebaseapp.com",
    databaseURL: "https://shop-gribanov.firebaseio.com",
    projectId: "shop-gribanov",
    storageBucket: "shop-gribanov.appspot.com",
    messagingSenderId: "161416264169",
    appId: "1:161416264169:web:a05312c302f35c59f1f378"
};

firebase.initializeApp(config);
// const firestore = firebase.firestore(app);
const storage = firebase.storage();
var storageRef = storage.ref();
var spaceRef = storageRef.child('catalog.json');
export default {storage, spaceRef, storageRef};