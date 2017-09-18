import * as types from './types';
import lessonApi from '../api/lessons';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export function loadLessonsSuccess(lessons) {
  return {type: types.LOAD_LESSONS_SUCCESS, lessons };
}

export function loadLessonSlidesSuccess(lesson) {
  return {type: types.LOAD_LESSON_SLIDES_SUCCESS, lesson };
}

export function loadLessons() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return lessonApi.getLessonsForStudent().then((lessons) => {
      dispatch(loadLessonsSuccess(lessons));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function loadLessonSlides(lessonId, lessonType, slideType){
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return lessonApi.getLessonSlides(lessonId, lessonType, slideType).then(lessonInfo => {
      dispatch(loadLessonSlidesSuccess(lessonInfo));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
