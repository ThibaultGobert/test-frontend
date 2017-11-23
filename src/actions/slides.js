import {
  FETCH_LESSON_SLIDES_START,
  FETCH_LESSON_SLIDES_SUCCESS,
  FETCH_LESSON_SLIDES_ERROR
} from './types';

export function fetchLessonSlidesStart() {
  return { type: FETCH_LESSON_SLIDES_START };
}

export function fetchLessonSlidesSuccess(data) {
  return { type: FETCH_LESSON_SLIDES_SUCCESS, data };
}

export function fetchLessonSlidesError(error) {
  return { type: FETCH_LESSON_SLIDES_ERROR, error };
}
