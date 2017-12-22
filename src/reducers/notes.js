import * as types from '../actions/types';
import initialState from './initialState';
import merge from 'lodash/merge';

export default function notesReducer(state = initialState.notes, action) {
  switch (action.type) {
    case types.FETCH_NOTES_START:
      return Object.assign({}, state, {data: {}, loading: true, error: null, hasError: false });

    case types.FETCH_NOTES_SUCCESS:
      return merge({}, state, {data: action.notes.entities.notes, loading: false, error: null, hasError: false });

    case types.FETCH_NOTES_ERROR:
      return Object.assign({}, state, {data: {}, loading: false, error: action.error, hasError: true });

    default:
      return state;
  }
}
