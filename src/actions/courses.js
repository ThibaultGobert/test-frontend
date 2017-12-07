import {
  FETCH_COURSES_START,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_ERROR,
  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_ERROR
} from './types';

export function fetchCoursesStart() {
  return { type: FETCH_COURSES_START };
}

export function fetchCoursesSuccess(data) {
  return { type: FETCH_COURSES_SUCCESS, data };
}

export function fetchCoursesError(error) {
  return { type: FETCH_COURSES_ERROR, error };
}

export function fetchStudentsStart() {
  return { type: FETCH_STUDENTS_START };
}

export function fetchStudentsSuccess(data, courseId) {
  return { type: FETCH_STUDENTS_SUCCESS, data, courseId };
}

export function fetchStudentsError(error) {
  return { type: FETCH_STUDENTS_ERROR, error };
}
