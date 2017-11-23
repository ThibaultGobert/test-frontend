import merge from 'lodash/merge';

import { FETCH_ATTENDANCES_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function courseReducer(state = initialState.attendances, action) {
  switch (action.type) {
    case FETCH_ATTENDANCES_SUCCESS:
      return merge({}, state, {
        data: action.data,
      });

    default:
      return state;
  }
}
