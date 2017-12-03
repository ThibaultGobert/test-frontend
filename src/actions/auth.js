import { LOGIN_START, LOGIN_SUCCES, LOGIN_ERROR, LOGOUT } from './types';

export function loginStart() {
  return {
    type: LOGIN_START
  };
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCES,
    user: response
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}

export function logOut() {
  return { type: LOGOUT };
}
