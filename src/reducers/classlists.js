import * as types from '../actions/types';
import initialState from './initialState';

export default function classlistsReducer(state = initialState.classlists, {type, data, error}) {
  switch (type) {
    case types.FETCH_CHILDREN:
      return Object.assign({}, state, { [data.courseId]:  []}, {loading: true, error: null, hasError: false});

    case types.LOAD_CHILDREN_SUCCESS:
      return Object.assign({}, state, { [data.courseId]:  data.children}, {loading: false, error: null, hasError: false});

    case types.FETCH_CHILDREN_ERROR:
      return Object.assign({}, state, { [data.courseId]:  []}, {loading: true, error, hasError: false});

    default:
      return state;
  }
}

