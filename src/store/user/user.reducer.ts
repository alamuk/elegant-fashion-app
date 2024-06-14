// this will be our reducer
import { AnyAction } from 'redux';
import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signInSuccess,
  signOutSuccess,
} from './user.action';

import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (
    signOutFailed.match(action) ||
    signInFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
  //
};

//  need to think which will be first
// switch (type) {
//   case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
//     return {
//       ...state,
//       currentUser: payload,
//     };
//   case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
//     return {
//       ...state,
//       currentUser: null,
//     };
//   case USER_ACTION_TYPE.SIGN_OUT_FAILED:
//   case USER_ACTION_TYPE.SIGN_IN_FAILED:
//   case USER_ACTION_TYPE.SIGN_UP_FAILED:
//     return {
//       ...state,
//       error: payload,
//     };
//
//   default:
//     // if there is not any change in the user state - it will return the current state.
//     //   state is an object
//     return state;
// }
