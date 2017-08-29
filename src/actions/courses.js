import * as types from './types';
import lessonApi from '../api/mockLesson';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return lessonApi.getCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
