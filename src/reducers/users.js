import * as types from '../actions/types';
import initialState from './initialState';
import merge from "lodash/merge";

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return merge({}, state, { data: action.data.entities.users, loading: false, error: null, hasError: false});

    case types.FETCH_CHILDREN:
      return Object.assign({}, state, {loading: true, error: null, hasError: false});

    case types.LOAD_CHILDREN_SUCCESS:
      return merge({}, state, { data: action.data.children.entities.users, loading: false, error: null, hasError: false});

    case types.FETCH_CHILDREN_ERROR:
      return Object.assign({}, state, {loading: true, error: action.error, hasError: false});

    default:
      return state;
  }
}
