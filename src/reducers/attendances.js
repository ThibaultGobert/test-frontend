import merge from 'lodash/merge';

import { FETCH_ATTENDANCES_START, FETCH_ATTENDANCES_SUCCESS, FETCH_ATTENDANCES_ERROR, POST_ATTENDANCE_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function attendanceReducer(state = initialState.attendances, action) {
  switch (action.type) {
    case FETCH_ATTENDANCES_START:
      return Object.assign({}, { data: {}, loading: true, error: null, hasError: false });

    case FETCH_ATTENDANCES_SUCCESS:
      return merge({}, state, {
        data: action.data.entities.attendances,
      });

    case FETCH_ATTENDANCES_ERROR:
      return Object.assign({}, { data: {}, loading: false, error: action.error, hasError: true });

    case POST_ATTENDANCE_SUCCESS:
      return merge({}, state, {
        data: { [action.response.id]: { ...action.response } },
      });

    default:
      return state;
  }
}
