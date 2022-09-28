import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";





const firebaseConfig = {
  apiKey: "AIzaSyBca5di8xCR74VziZoVm9inR54WNSOeBW4",
  authDomain: "disneyplus-clone-2591e.firebaseapp.com",
  projectId: "disneyplus-clone-2591e",
  storageBucket: "disneyplus-clone-2591e.appspot.com",
  messagingSenderId: "623321469727",
  appId: "1:623321469727:web:e6614fb28b1cf31314d62a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
