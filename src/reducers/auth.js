import * as types from '../actions/types';
import initialState from './initialState';

export default function authReducer(state = initialState.loggedIn, action) {

  switch (action.type) {
    case types.LOGIN_SUCCES:
      return action.user;

    case types.LOGOUT:
      return {};

    default:
      return state;
  }
}
