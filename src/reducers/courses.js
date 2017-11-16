import * as types from '../actions/types';
import initialState from './initialState';
import merge from "lodash/merge";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.FETCH_COURSES:
      return Object.assign({}, { data: {}, loading: true, error: null, hasError: false});

    case types.LOAD_COURSES_SUCCESS:
      return Object.assign({}, { data: action.data.entities.courses, loading: false, error: null, hasError: false});

    case types.FETCH_COURSES_ERROR:
      return Object.assign({}, { data: {}, loading: false, error: action.error, hasError: true});

    case types.LOAD_CHILDREN_SUCCESS:
      return merge({}, state, { data: { [action.data.courseId]: { classList: action.data.children.result}}});;

    default:
      return state;
  }
}
