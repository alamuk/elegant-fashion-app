// this will be our reducer
import { USER_ACTION_TYPE } from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  isLoggedIn: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  //  need to think which will be first
  switch (type) {
    case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPE.SIGN_OUT_FAILED:
    case USER_ACTION_TYPE.SIGN_IN_FAILED:
    case USER_ACTION_TYPE.SIGN_UP_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      // if there is not any change in the user state - it will return the current state.
      //   state is a object
      return state;
  }
};
