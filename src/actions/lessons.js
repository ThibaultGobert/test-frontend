import * as types from './types';
import lessonApi from '../api/lessons';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export function loadLessonsSuccess(lessons) {
  return {type: types.LOAD_LESSONS_SUCCESS, lessons };
}

export function loadLessonSlidesSuccess(lessonInfo) {
  return {type: types.LOAD_LESSON_SLIDES_SUCCESS, lessonInfo };
}

export function loadLessons(slidetype) {
  return function(dispatch) {
    dispatch(beginAjaxCall(types.FETCH_LESSONS));
    return lessonApi.getLessonsForStudent(slidetype).then((lessons) => {
      dispatch(loadLessonsSuccess(lessons));
    }).catch(error => {
      dispatch(ajaxCallError(types.FETCH_LESSONS_ERROR, error));
    });
  };
}

export function loadLessonSlides(lessonId, lessonType, slideType){
  return function(dispatch) {
    dispatch(beginAjaxCall(types.FETCH_LESSON_SLIDES));
    return lessonApi.getLessonSlides(lessonId, lessonType, slideType).then(lessonInfo => {
      dispatch(loadLessonSlidesSuccess(lessonInfo));
    }).catch(error => {
      dispatch(ajaxCallError(types.FETCH_LESSON_SLIDES_ERROR, error));
    });
  };
}
