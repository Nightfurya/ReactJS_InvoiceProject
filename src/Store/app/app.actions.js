import { createAction, dispatch } from "redux-act";

export const userSignIn = createAction("USER SIGN IN");
export const userSignInSuccess = () => dispatch => {
  dispatch(userSignIn());
};

export const userSignOut = createAction("USER SIGN OUT");
export const userMakeSignOut = () => dispatch => {
  dispatch(userSignOut());
};
