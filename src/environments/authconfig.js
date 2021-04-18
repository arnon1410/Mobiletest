import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyBHTPIoP-OdwoWAtFkxWsZtfo7Xw-gviEc",
    authDomain: "myproject-ba0a0.firebaseapp.com",
    databaseURL: "https://myproject-ba0a0-default-rtdb.firebaseio.com",
    projectId: "myproject-ba0a0",
    storageBucket: "myproject-ba0a0.appspot.com",
    messagingSenderId: "983061356163",
    appId: "1:983061356163:web:a8ab32365c0648cb7d45b6",
    measurementId: "G-VMPT512M19"
};



firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth
