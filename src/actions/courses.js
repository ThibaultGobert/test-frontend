import {
  FETCH_COURSES_START,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_ERROR,
  FETCH_CHILDREN_START,
  FETCH_CHILDREN_SUCCESS,
  FETCH_CHILDREN_ERROR
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

export function fetchChildrenStart() {
  return { type: FETCH_CHILDREN_START };
}

export function fetchChildrenSuccess(data) {
  return { type: FETCH_CHILDREN_SUCCESS, data };
}

export function fetchChildrenError(error) {
  return { type: FETCH_CHILDREN_ERROR, error };
}

export function loadChildrenSuccess(children, courseId) {
  return {
    type: FETCH_CHILDREN_SUCCESS,
    data: {
      children: children,
      courseId: courseId
    }
  };
}
