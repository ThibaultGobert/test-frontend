import * as types from './types';
import calendarApi from '../api/mockCalendar';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export function loadCalendarSuccess(calendar) {
  return {type: types.LOAD_CALENDAR_SUCCESS, calendar };
}

export function loadCalendar() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return calendarApi.getCalendar().then((calendar) => {
      dispatch(loadCalendarSuccess(calendar));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
