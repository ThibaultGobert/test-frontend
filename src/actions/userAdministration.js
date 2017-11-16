import { POST_ATTENDANCE_START, POST_ATTENDANCE_SUCCESS, POST_ATTENDANCE_ERROR } from './types';
import userAdministrationApi from '../api/userAdministration';

export function postAttendanceStart(response) {
  return { type: POST_ATTENDANCE_START, response };
}

export function postAttendanceSuccess(response) {
  return { type: POST_ATTENDANCE_SUCCESS, response };
}

export function postAttendanceError(error) {
  return { type: POST_ATTENDANCE_ERROR, error };
}
