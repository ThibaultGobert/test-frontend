import * as types from './types';
import courseApi from '../api/courses';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses };
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
    return courseApi.getCourses(false).then((courses) => {
      dispatch(loadCoursesSuccess(courses));
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
  const classList = state.classlists.data[courseId];
  if (!classList) {
    return true
  } else if (state.classlists.loading) {
    return false
  } else {
    return state.classlists.hasError
  }
}

export function loadChildrenIfNeeded(courseId) {
  return (dispatch, getState) => {
    if (shouldFetchChildren(getState(), courseId)) {
      return dispatch(loadChildren(courseId))
    }
  };
}

function shouldFetchCourses(state) {
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
