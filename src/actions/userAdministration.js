import {
  POST_ATTENDANCE_START,
  POST_ATTENDANCE_SUCCESS,
  POST_ATTENDANCE_ERROR,
  FETCH_ATTENDANCES_START,
  FETCH_ATTENDANCES_SUCCESS,
  FETCH_ATTENDANCES_ERROR,
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
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

export function fetchProfileStart() {
  return { type: FETCH_PROFILE_START };
}

export function fetchProfileSuccess(data) {
  return { type: FETCH_PROFILE_SUCCESS, data };
}

export function fetchProfileError(error) {
  return { type: FETCH_PROFILE_ERROR, error };
}

export function updateProfileStart() {
  return { type: UPDATE_PROFILE_START };
}

export function updateProfileSuccess(data) {
  return { type: UPDATE_PROFILE_SUCCESS, data };
}

export function updateProfileError(error) {
  return { type: UPDATE_PROFILE_ERROR, error };
}
