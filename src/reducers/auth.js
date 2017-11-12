import * as types from '../actions/types';
import initialState from './initialState';

export default function authReducer(state = initialState.loggedIn, action) {
  switch (action.type) {
    case types.BEGIN_LOGIN:
      return { ...state, loading: true };

    case types.LOGIN_SUCCES:
      return Object.assign({}, { data: action.user, error: undefined, loading: false });

    case types.LOGIN_ERROR:
      return Object.assign({}, { data: {}, error: action.error, loading: false });

    default:
      return state;
  }
}
