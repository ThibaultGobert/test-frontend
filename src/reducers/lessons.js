import * as types from '../actions/types';
import initialState from './initialState';

export default function lessonReducer(state = initialState.lessons, action) {
  switch (action.type) {
    case types.FETCH_LESSONS:
      return Object.assign({}, { data:[], loading: true, error: null, hasError: false});

    case types.LOAD_LESSONS_SUCCESS:
      return Object.assign({}, { data: action.lessons, loading: false, error: null, hasError: false});

    case types.FETCH_LESSONS_ERROR:
      return Object.assign({}, { data: [], loading: false, error: action.error, hasError: true});

    default:
      return state;
  }
}
