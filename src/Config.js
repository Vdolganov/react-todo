import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const FB_CONFIG = {
    apiKey: "AIzaSyCmBa7sc6N9PJJBbApY9uj6xfaj5NxRLO8",
    authDomain: "btwrks-edd19.firebaseapp.com",
    databaseURL: "https://btwrks-edd19.firebaseio.com",
    projectId: "btwrks-edd19",
    storageBucket: "",
    messagingSenderId: "83380648603",
    appId: "1:83380648603:web:bc0c77f6b9eca98d"
};

firebase.initializeApp(FB_CONFIG);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;