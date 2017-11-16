import { POST_ATTENDANCE_START, POST_ATTENDANCE_SUCCESS, POST_ATTENDANCE_ERROR } from './types';

export function postAttendanceStart() {
  return { type: POST_ATTENDANCE_START };
}

export function postAttendanceSuccess(response) {
  return { type: POST_ATTENDANCE_SUCCESS, response };
}

export function postAttendanceError(error) {
  return { type: POST_ATTENDANCE_ERROR, error };
}
