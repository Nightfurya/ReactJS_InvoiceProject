import { createReducer } from "redux-act";
import * as appActions from "./app.actions";

const initialState = {
  authToken: null
};

const reducer = {};

export default createReducer(reducer, initialState);
