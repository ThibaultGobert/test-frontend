import merge from 'lodash/merge';
import * as types from '../actions/types';
import initialState from './initialState';

export default function teachersReducer(state = initialState.teachers, action) {
  switch (action.type) {
    case types.FETCH_COURSES_SUCCESS:
      return merge({}, state, {
        data: action.data.entities.teachers,
        loading: false,
        error: null,
        hasError: false,
      });

    case types.FETCH_LOCATIONS_SUCCESS:
      return merge({}, state, { data: action.data.entities.teachers });

    default:
      return state;
  }
}
