import {
  FETCH_COURSES_START,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_ERROR,
  FETCH_STUDENTS_SUCCESS
} from '../actions/types';
import initialState from './initialState';
import merge from 'lodash/merge';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case FETCH_COURSES_START:
      return Object.assign({}, { data: {}, loading: true, error: null, hasError: false });

    case FETCH_COURSES_SUCCESS:
      return merge({}, state, {
        data: action.data.entities.courses,
        loading: false,
        error: null,
        hasError: false
      });

    case FETCH_COURSES_ERROR:
      return Object.assign({}, { data: {}, loading: false, error: action.error, hasError: true });

    case FETCH_STUDENTS_SUCCESS:
      return merge({}, state, {
        data: { [action.courseId]: { students: action.data.result } }
      });

    default:
      return state;
  }
}
