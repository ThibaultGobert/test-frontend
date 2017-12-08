import * as types from '../actions/types';
import initialState from './initialState';
import merge from 'lodash/merge';

export default function studentsReducer(state = initialState.students, action) {
  switch (action.type) {
    case types.FETCH_STUDENTS_START:
      return Object.assign({}, state, { loading: true, error: null, hasError: false });

    case types.FETCH_STUDENTS_SUCCESS:
      return merge({}, state, {
        data: action.data.entities.students,
        loading: false,
        error: null,
        hasError: false
      });

    case types.FETCH_STUDENTS_ERROR:
      return Object.assign({}, state, { loading: true, error: action.error, hasError: false });

    default:
      return state;
  }
}
