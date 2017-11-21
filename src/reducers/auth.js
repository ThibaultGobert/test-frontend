import { LOGIN_START, LOGIN_SUCCES, LOGIN_ERROR } from '../actions/types';
import initialState from './initialState';

import { setUser } from '../api/api';

function authReducer(state = initialState.loggedIn, action) {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true };

    case LOGIN_SUCCES: {
      setUser(action.user);
      return { data: action.user, error: undefined, loading: false };
    }

    case LOGIN_ERROR:
      return { data: {}, error: action.error, loading: false };

    default:
      return state;
  }
}

export default authReducer;
