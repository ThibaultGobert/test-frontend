import {
  FETCH_COURSES_START,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_ERROR,
  FETCH_CHILDREN_START,
  FETCH_CHILDREN_SUCCESS,
  FETCH_CHILDREN_ERROR,
} from 'types/courses';
import _ from 'lodash';

export function fetchCoursesStart() {
  return { type: FETCH_COURSES_START };
}

export function fetchCoursesSuccess(data) {
  return {type: FETCH_COURSES_SUCCESS, data };
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
  let childrenCourse = {
    children: children,
    courseId: courseId
  };
  return { type: types.LOAD_CHILDREN_SUCCESS, data: childrenCourse};
}

export function shouldFetchChildren(state, courseId) {
  const course = state.courses.data[courseId];
  if (course) {
    return !course.hasOwnProperty('classList');
  }
  return true;
}

export function shouldFetchCourses(state) {
  if (_.isEmpty(state.courses.data)) {
    return true;
  }

  if (state.courses.loading) {
    return false
  } else {
    return state.courses.hasError
  }
}
