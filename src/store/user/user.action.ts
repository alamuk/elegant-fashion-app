import { User } from 'firebase/auth';

import {
  CreateAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPE } from './user.type';
import { UserData, AdditionalInformation } from '../../utils/firebase/firebase.utils';

// SET UP SESSION AND USER
export type CheckUserSession = Action<USER_ACTION_TYPE.CHECK_USER_SESSION>;
export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPE.SET_CURRENT_USER,
  UserData
>;
// GOOGLE SIGN IN
export type GoogleSignInStart = Action<USER_ACTION_TYPE.GOOGLE_SIGN_IN_START>;
// EMAIL SIGN IN
export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPE.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
// SIGN IN
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_SUCCESS, UserData>;
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPE.SIGN_IN_FAILED, Error>;

// SIGN UP
export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPE.SIGN_UP_START,
  {
    email: string;
    password: string;
    displayName: string;
  }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPE.SIGN_UP_SUCCESS,
  {
    user: User;
    additionalDetails: AdditionalInformation;
  }
>;
export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPE.SIGN_UP_FAILED, Error>;

// SIGN OUT
export type SignOutStart = Action<USER_ACTION_TYPE.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPE.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPE.SIGN_OUT_FAILED, Error>;

////////////////////////////////////

// Setting Up session & CURRENT USER
export const checkUserSession = withMatcher(
  (): CheckUserSession => CreateAction(USER_ACTION_TYPE.CHECK_USER_SESSION),
);

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    CreateAction(USER_ACTION_TYPE.SET_CURRENT_USER, user),
);

// Google SIGN IN start
export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => CreateAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START),
);

// EMAIL SIGN IN
export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    CreateAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, {
      email,
      password,
    }),
);
// SIGN IN
export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess =>
    CreateAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user),
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed => CreateAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error),
);

// SIGN UP
export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    CreateAction(USER_ACTION_TYPE.SIGN_UP_START, {
      email,
      password,
      displayName,
    }),
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    CreateAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, {
      user,
      additionalDetails,
    }),
);
export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed => CreateAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error),
);

// SIGN OUT
export const signOutStart = withMatcher(
  (): SignOutStart => CreateAction(USER_ACTION_TYPE.SIGN_OUT_START),
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => CreateAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS),
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed => CreateAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error),
);
