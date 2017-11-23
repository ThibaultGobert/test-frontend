import {
  FETCH_LESSONS_START,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSONS_ERROR
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
