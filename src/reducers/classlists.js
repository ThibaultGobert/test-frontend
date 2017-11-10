import * as types from '../actions/types';
import initialState from './initialState';

export default function courseReducer(state = initialState.classlist, action) {
  switch (action.type) {
    case types.FETCH_CHILDREN:
      return Object.assign({}, { data:[], loading: true, error: null, hasError: false});

    case types.LOAD_CHILDREN_SUCCESS:
      return Object.assign({}, { data: { courseId: action.courseId, children: action.children}, loading: false, error: null, hasError: false});

    case types.FETCH_CHILDREN_ERROR:
      return Object.assign({}, { data: [], loading: false, error: action.error, hasError: true});

    default:
      return state;
  }
}

