import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRIo_XgPqSJslkSFtdLvFJF8HOM9EIlGc",
  authDomain: "sushi-sunday.firebaseapp.com",
  databaseURL: "https://sushi-sunday.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// Named export
export { firebaseApp };

// default export
export default base;
