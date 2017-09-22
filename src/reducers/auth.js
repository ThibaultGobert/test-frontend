import * as types from '../actions/types';
import initialState from './initialState';

export default function authReducer(state = initialState.loggedIn, action) {
  switch (action.type) {
    case types.LOGIN_SUCCES:
      return Object.assign({}, { data: action.user, error: null, hasError: false});

    case types.LOGIN_ERROR:
      return Object.assign({}, { data: {}, error: action.error, hasError: true});

    default:
      return state;
  }
}
