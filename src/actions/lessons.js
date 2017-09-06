import * as types from './types';
import lessonApi from '../api/mockLessons';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export function loadLessonsSuccess(lessons) {
  return {type: types.LOAD_LESSONS_SUCCESS, lessons };
}

export function loadLessonSlidesSuccess(lesson) {
  return {type: types.LOAD_LESSON_SLIDES_SUCCESS, lesson };
}

export function loadLessons(type) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return lessonApi.getLessons(type).then((lessons) => {
      dispatch(loadLessonsSuccess(lessons));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function loadLessonSlides(type, lessonId){
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return lessonApi.getLessonSlides(type, lessonId).then(lessonInfo => {
      dispatch(loadLessonSlidesSuccess(lessonInfo));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
