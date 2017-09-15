import * as types from '../actions/types';
import initialState from './initialState';

export default function calendarReducer(state = initialState.calendar, action) {
  switch (action.type) {
    case types.LOAD_CALENDAR_SUCCESS:
      return Object.assign([], action.calendar);

    default:
      return state;
  }
}
