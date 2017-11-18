import {
  FETCH_LESSON_SLIDES_START,
  FETCH_LESSON_SLIDES_SUCCESS,
  FETCH_LESSON_SLIDES_ERROR
} from '../actions/types';
import initialState from './initialState';

export default function lessonSlidesReducer(state = initialState.currentLesson, action) {
  switch (action.type) {
    case FETCH_LESSON_SLIDES_START:
      return Object.assign({}, { data: {}, loading: true, error: null, hasError: false });

    case FETCH_LESSON_SLIDES_SUCCESS:
      return Object.assign(
        {},
        { data: action.lessonInfo, loading: false, error: null, hasError: false }
      );

    case FETCH_LESSON_SLIDES_ERROR:
      return Object.assign({}, { data: {}, loading: false, error: action.error, hasError: true });

    default:
      return state;
  }
}
