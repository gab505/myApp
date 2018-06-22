import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyDEpJj_imLFNGUyZwegUA2jQVXxb6CwJPA",
    authDomain: "plannerlogin.firebaseapp.comyarn",
    databaseURL: "https://plannerlogin.firebaseio.com",
    projectId: "plannerlogin",
    storageBucket: "plannerlogin.appspot.com",
    messagingSenderId: "3185532817"
  };
firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

export { firebase, db };
