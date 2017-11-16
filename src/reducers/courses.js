import * as types from '../actions/types';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.FETCH_COURSES:
      return Object.assign({}, { data: {}, loading: true, error: null, hasError: false});

    case types.LOAD_COURSES_SUCCESS:
      return Object.assign({}, { data: action.data.entities.courses, loading: false, error: null, hasError: false});

    case types.FETCH_COURSES_ERROR:
      return Object.assign({}, { data: {}, loading: false, error: action.error, hasError: true});

    default:
      return state;
  }
}
