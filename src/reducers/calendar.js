import * as types from '../actions/types';
import initialState from './initialState';

export default function calendarReducer(state = initialState.calendar, action) {
  switch (action.type) {
    case types.FETCH_CALENDAR:
      return Object.assign({}, { data:[], loading: true, error: null, hasError: false});

    case types.LOAD_CALENDAR_SUCCESS:
      return Object.assign({}, { data: action.calendar, loading: false, error: null, hasError: false});

    case types.FETCH_CALENDAR_ERROR:
      return Object.assign({}, { data: [], loading: false, error: action.error, hasError: true});

    default:
      return state;
  }
}
