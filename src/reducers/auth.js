import * as types from '../actions/types';
import initialState from './initialState';

export default function authReducer(state = initialState.loggedIn, action) {
  switch (action.type) {
    case types.LOGIN_SUCCES:
      return !!sessionStorage.jwt;

    case types.LOGOUT:
      return !!sessionStorage.jwt;

    default:
      return state;
  }
}
