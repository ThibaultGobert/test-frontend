import * as types from './types';
import authApi from '../api/auth';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatus";

export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCES, user
  };
}

export function login(credentials) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return authApi.login(credentials).then((user) => {
      dispatch(loginSuccess(user));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function logOut() {
  return {type: types.LOGOUT};
}
