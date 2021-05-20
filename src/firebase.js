import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCjACEd-xWleC9h46CAosSIMaa_sEWTN4s",
  authDomain: "whatsapp-clone-e6a1b.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-e6a1b.firebaseio.com",
  projectId: "whatsapp-clone-e6a1b",
  storageBucket: "whatsapp-clone-e6a1b.appspot.com",
  messagingSenderId: "591976847197",
  appId: "1:591976847197:web:b63dd702eec2a7386ebab4",
  measurementId: "G-GTZEPQM7FK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
