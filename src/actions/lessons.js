import {
  FETCH_LESSONS_START,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSONS_ERROR,
  FETCH_ATTENDANCES_START,
  FETCH_ATTENDANCES_SUCCESS,
  FETCH_ATTENDANCES_ERROR,
} from './types';

export function fetchLessonsStart() {
  return { type: FETCH_LESSONS_START };
}

export function fetchLessonsSuccess(lessons) {
  return { type: FETCH_LESSONS_SUCCESS, lessons };
}

export function fetchLessonsError(error) {
  return { type: FETCH_LESSONS_ERROR, error };
}

export function fetchAttendancesStart() {
  return { type: FETCH_ATTENDANCES_START };
}

export function fetchAttendancesSuccess(data, lessenId) {
  return { type: FETCH_ATTENDANCES_SUCCESS, data, lessenId };
}

export function fetchAttendancesError(error) {
  return { type: FETCH_ATTENDANCES_ERROR, error };
}
