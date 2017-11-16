import * as types from './types';
import courseApi from '../api/courses';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";
import _ from 'lodash';

export function loadCoursesSuccess(data) {
  return {type: types.LOAD_COURSES_SUCCESS, data };
}

export function loadChildrenSuccess(children, courseId) {
  let childrenCourse = {
    children: children,
    courseId: courseId
  };
  return { type: types.LOAD_CHILDREN_SUCCESS, data: childrenCourse};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall(types.FETCH_COURSES));
    return courseApi.getCourses(false).then((data) => {
      dispatch(loadCoursesSuccess(data));
    }).catch(error => {
      dispatch(ajaxCallError(types.FETCH_COURSES_ERROR, error));
    });
  };
}

export function loadChildren(courseId) {
  return function(dispatch) {
    dispatch(beginAjaxCall(types.FETCH_CHILDREN, {courseId}));
    return courseApi.getChildrenForCourse(courseId).then((children) => {
      dispatch(loadChildrenSuccess(children, courseId));
    }).catch(error => {
      dispatch(ajaxCallError(types.FETCH_CHILDREN_ERROR, error, {courseId}));
    });
  };
}

function shouldFetchChildren(state, courseId) {
  const course = state.courses.data[courseId];
  if (course) {
    return !course.hasOwnProperty('classList');
  }
  return true;
}

export function loadChildrenIfNeeded(courseId) {
  return (dispatch, getState) => {
    if (shouldFetchChildren(getState(), courseId)) {
      return dispatch(loadChildren(courseId))
    }
  };
}

function shouldFetchCourses(state) {
  if (_.isEmpty(state.courses.data)) {
    return true;
  }

  if (state.courses.loading) {
    return false
  } else {
    return state.courses.hasError
  }
}

export function loadCoursesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCourses(getState())) {
      return dispatch(loadCourses())
    }
  };
}
