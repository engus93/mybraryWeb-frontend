import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmhj9mS87-1H5ECTYYwIwuLvUk_gj8TnA",
  authDomain: "mybrary-web.firebaseapp.com",
  databaseURL: "https://mybrary-web.firebaseio.com",
  projectId: "mybrary-web",
  storageBucket: "mybrary-web.appspot.com",
  messagingSenderId: "786313676076",
  appId: "1:786313676076:web:efe4744a28ac186c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storageRef = firebase.storage().ref();

export { storageRef, firebase as default };
