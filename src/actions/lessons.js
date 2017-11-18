import {
  FETCH_LESSONS_START,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSONS_ERROR,
  FETCH_LESSON_SLIDES_START,
  FETCH_LESSON_SLIDES_SUCCESS,
  FETCH_LESSON_SLIDES_ERROR
} from './types';

export function fetchLessonsStart() {
  return { type: FETCH_LESSONS_START };
}

export function fetchLessonsSuccess(lessons) {
  return { type: FETCH_LESSONS_SUCCESS, lessons };
}

export function fetchLessonsError(error) {
  return { type: FETCH_LESSONS_ERROR, error };
}

export function fetchLessonSlidesStart() {
  return { type: FETCH_LESSON_SLIDES_START };
}

export function fetchLessonSlidesSuccess(lessonInfo) {
  return { type: FETCH_LESSON_SLIDES_SUCCESS, lessonInfo };
}

export function fetchLessonSlidesError(error) {
  return { type: FETCH_LESSON_SLIDES_ERROR, error };
}
