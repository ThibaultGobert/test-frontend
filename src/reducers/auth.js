import * as types from '../actions/types';
import initialState from './initialState';

function authReducer(state = initialState.loggedIn, action) {
  switch (action.type) {
    case types.BEGIN_LOGIN:
      return { ...state, loading: true };

    case types.LOGIN_SUCCES:
      return { data: action.user, error: undefined, loading: false };

    case types.LOGIN_ERROR:
      return { data: {}, error: action.error, loading: false };

    default:
      return state;
  }
}

export default authReducer;
