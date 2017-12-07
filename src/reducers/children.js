import * as types from '../actions/types';
import initialState from './initialState';
import merge from 'lodash/merge';

export default function childrenReducer(state = initialState.children, action) {
  switch (action.type) {
    case types.FETCH_CHILDREN_START:
      return Object.assign({}, state, { loading: true, error: null, hasError: false });

    case types.FETCH_CHILDREN_SUCCESS:
      return merge({}, state, {
        data: action.data.entities.children,
        loading: false,
        error: null,
        hasError: false
      });

    case types.FETCH_CHILDREN_ERROR:
      return Object.assign({}, state, { loading: true, error: action.error, hasError: false });

    default:
      return state;
  }
}
