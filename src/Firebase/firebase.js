import * as firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAcnYIYOutIbIEDueERfrE4Uee7ZR1Qlww",
  authDomain: "test-login-urich.firebaseapp.com",
  databaseURL: "https://test-login-urich.firebaseio.com",
  projectId: "test-login-urich",
  storageBucket: "test-login-urich.appspot.com",
  messagingSenderId: "757450133488"
};

firebase.initializeApp(config);

export default firebase;
