import * as types from './types';
import courseApi from '../api/mockCourses';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
