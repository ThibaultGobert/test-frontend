import merge from 'lodash/merge';
import {
  LOGIN_START,
  LOGIN_SUCCES,
  LOGIN_ERROR,
  LOGOUT,
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
} from '../actions/types';
import initialState from './initialState';

import { setUser, removeUser } from '../api/storage';

function authReducer(state = initialState.loggedIn, action) {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true };

    case LOGIN_SUCCES: {
      setUser(action.user);
      return merge(state, { data: action.user, error: undefined, loading: false });
    }

    case LOGIN_ERROR:
      return { data: {}, error: action.error, loading: false };

    case FETCH_PROFILE_START:
      return merge({}, state, {
        personalInformation: { loading: true, error: null, hasError: false },
      });

    case FETCH_PROFILE_SUCCESS:
      return merge({}, state, {
        personalInformation: { loading: false, data: action.data },
      });

    case FETCH_PROFILE_ERROR:
      return merge({}, state, {
        personalInformation: { loading: false, error: action.error, hasError: true },
      });

    case LOGOUT: {
      removeUser();
      window.location = '/';
      return state;
    }

    default:
      return state;
  }
}

export default authReducer;
