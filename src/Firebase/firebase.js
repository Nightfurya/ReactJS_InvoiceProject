import * as firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBomce5s2ZtbKMK504PI7F-s0UHjDo85s4",
  authDomain: "pazhiloy-invoice.firebaseapp.com",
  databaseURL: "https://pazhiloy-invoice.firebaseio.com",
  projectId: "pazhiloy-invoice",
  storageBucket: "pazhiloy-invoice.appspot.com",
  messagingSenderId: "829114501701"
};

firebase.initializeApp(config);

export default firebase;
