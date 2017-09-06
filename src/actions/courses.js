import * as types from './types';
import courseApi from '../api/courses';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadChildrenSuccess(couseId, children) {
  const childrenForCourse = { couseId: couseId, children: children};
  return { type: types.LOAD_CHILDREN_SUCCESS, childrenForCourse};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getCourses(false).then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function loadChildren(courseId) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getChildrenForCourse(courseId).then((children) => {
      dispatch(loadChildrenSuccess(courseId, children));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

// TODO:: hard coded false value
