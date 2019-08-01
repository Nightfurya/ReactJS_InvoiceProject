import { createAction, dispatch } from "redux-act";

export const userSignIn = createAction("USER SIGN IN");
export const userSignInSuccess = () => dispatch => {
  dispatch(userSignIn());
};
