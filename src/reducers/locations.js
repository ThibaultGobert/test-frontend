import merge from 'lodash/merge';
import * as types from '../actions/types';
import initialState from './initialState';

export default function locationsReducer(state = initialState.locations, action) {
  switch (action.type) {
    case types.FETCH_COURSES_SUCCESS:
      return Object.assign({}, state, {
        data: action.data.entities.locations,
        loading: false,
        error: null,
        hasError: false,
      });

    case types.FETCH_LOCATIONS_START:
      return merge({}, state, { loading: true });

    case types.FETCH_LOCATIONS_SUCCESS: {
      return merge({}, state, {
        data: action.data.entities.locations,
        loading: false,
      });
    }

    case types.FETCH_LOCATIONS_ERROR:
      return merge({}, state, { loading: false, hasError: true, error: action.error });

    default:
      return state;
  }
}
