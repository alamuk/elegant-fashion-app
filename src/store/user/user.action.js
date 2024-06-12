import { CreateAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPE } from "./user.type";

//  create by using creation function the action we will take
// export const CreateAction = (type, payload) => ({ type, payload });
export const setCurrentUser = (user) => {
  return CreateAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
};

//  IN THE ARGUMENT = WHAT WE NEED FROM USER - WE WILL PUT IN THE () PARENTHESIS
export const checkUserSession = () => {
  return CreateAction(USER_ACTION_TYPE.CHECK_USER_SESSION);
};

export const googleSignInStart = () => {
  return CreateAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START);
};

export const emailSignInStart = (email, password) => {
  return CreateAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, {
    email,
    password,
  });
};

export const signInSuccess = (user) => {
  return CreateAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user);
};
export const signInFailed = (error) => {
  return CreateAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error);
};

export const signUpStart = (email, password, displayName) => {
  return CreateAction(USER_ACTION_TYPE.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};

export const signUpSuccess = (user, additionalDetails) => {
  return CreateAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, {
    user,
    additionalDetails,
  });
};

export const signUpFailed = (error) => {
  return CreateAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error);
};

// SIGN OUT
export const signOutStart = () => {
  return CreateAction(USER_ACTION_TYPE.SIGN_OUT_START);
};

export const signOutSuccess = () => {
  return CreateAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS);
};

export const signOutFailed = (error) => {
  return CreateAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error);
};
