import { createReducer } from "redux-act";
import * as appActions from "./app.actions";

const initialState = {
  authToken: null
};

const reducer = {
  [appActions.userSignIn]: state => ({
    ...state,
    authToken: true
  }),
  [appActions.userSignOut]: state => ({
    ...state,
    authToken: null
  })
};

export default createReducer(reducer, initialState);
