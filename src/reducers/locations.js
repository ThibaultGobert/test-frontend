import * as types from '../actions/types';
import initialState from './initialState';

export default function locationsReducer(state = initialState.locations, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return Object.assign({}, state, { data: action.data.entities.locations, loading: false, error: null, hasError: false});

    default:
      return state;
  }
}
