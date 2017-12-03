import {
  POST_ATTENDANCE_START,
  POST_ATTENDANCE_SUCCESS,
  POST_ATTENDANCE_ERROR,
  FETCH_ATTENDANCES_START,
  FETCH_ATTENDANCES_SUCCESS,
  FETCH_ATTENDANCES_ERROR,
} from './types';

export function postAttendanceStart() {
  return { type: POST_ATTENDANCE_START };
}

export function postAttendanceSuccess(response) {
  return { type: POST_ATTENDANCE_SUCCESS, response };
}

export function postAttendanceError(error) {
  return { type: POST_ATTENDANCE_ERROR, error };
}

export function fetchAttendancesStart() {
  return { type: FETCH_ATTENDANCES_START };
}

export function fetchAttendancesSuccess(data) {
  return { type: FETCH_ATTENDANCES_SUCCESS, data };
}

export function fetchAttendancesError(error) {
  return { type: FETCH_ATTENDANCES_ERROR, error };
}
