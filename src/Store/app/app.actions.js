import { createAction } from "redux-act";
import firebase from "../../Firebase/firebase";

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export const userSignIn = createAction("USER SIGN IN");
export const userSignInSuccess = () => dispatch => {
  dispatch(userSignIn());
};

export const userSignOut = createAction("USER SIGN OUT");
export const userMakeSignOut = () => dispatch => {
  dispatch(userSignOut());
};

export const getFirebaseData = createAction("GET BANKS DATA");
export const getFirebaseDataSuccess = data => dispatch => {
  const { baseName, reducerFieldName } = data;
  const baseData = [];
  const collection = db.collection(baseName);
  collection.get().then(snapshot => {
    snapshot.forEach(doc => {
      baseData.push(doc.data());
    });
  });
  const dataToStore = {
    reducerFieldName: reducerFieldName,
    baseData: baseData
  };
  dispatch(getFirebaseData(dataToStore));
};
