import * as firebase from 'firebase'
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD9d3dDlv4U2dVCKeZqlF66S4gT4MhcOSg",
    authDomain: "react-firestore-todo.firebaseapp.com",
    databaseURL: "https://react-firestore-todo.firebaseio.com",
    projectId: "react-firestore-todo",
    storageBucket: "react-firestore-todo.appspot.com",
    messagingSenderId: "550659463084",
    appId: "1:550659463084:web:4e63e2a0c2437558288c09"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage().ref();