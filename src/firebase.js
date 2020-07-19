import * as firebase from "firebase/app";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB72SJldY3_USBS37Q-G05n7SaRRjmskok",
  authDomain: "facebook-messenger-clone-34433.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-34433.firebaseio.com",
  projectId: "facebook-messenger-clone-34433",
  storageBucket: "facebook-messenger-clone-34433.appspot.com",
  messagingSenderId: "465327571280",
  appId: "1:465327571280:web:04e1a1d58d7bf02ffa6c55",
  measurementId: "G-EM8Z2C1QQC"
})

const db = firebaseApp.firestore();
export default db;