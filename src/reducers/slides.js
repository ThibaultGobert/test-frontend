import * as types from '../actions/types';
import initialState from './initialState';
import merge from 'lodash/merge';

export default function slidesReducer(state = initialState.slides, action) {
  switch (action.type) {
    case types.FETCH_LESSON_SLIDES_START:
      return Object.assign({}, { data: {}, loading: true, error: null, hasError: false });

    case types.FETCH_LESSON_SLIDES_SUCCESS:
      return merge(
        {}, state,
        { data: action.data.entities.slide, loading: false, error: null, hasError: false }
      );

    case types.FETCH_LESSON_SLIDES_ERROR:
      return Object.assign({}, { data: {}, loading: false, error: action.error, hasError: true });

    default:
      return state;
  }
}
