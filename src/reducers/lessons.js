import merge from 'lodash/merge';
import initialState from './initialState';
import {
  FETCH_LESSONS_START,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSONS_ERROR,
  FETCH_COURSES_SUCCESS,
  FETCH_LESSON_SLIDES_SUCCESS,
  FETCH_ATTENDANCES_SUCCESS,
} from '../actions/types';

export default function lessonReducer(state = initialState.lessons, action) {
  switch (action.type) {
    case FETCH_LESSONS_START:
      return merge({}, { data: {}, loading: true, error: null, hasError: false });

    case FETCH_LESSONS_SUCCESS:
      return merge(
        {},
        { data: action.lessons.entities.lessons, loading: false, error: null, hasError: false },
      );

    case FETCH_LESSONS_ERROR:
      return merge({}, { data: {}, loading: false, error: action.error, hasError: true });

    case FETCH_COURSES_SUCCESS:
      return merge({}, state, {
        data: action.data.entities.lessons,
        loading: false,
        error: null,
        hasError: false,
      });

    case FETCH_LESSON_SLIDES_SUCCESS:
      return merge({}, state, { data: action.data.entities.lessons });

    case FETCH_ATTENDANCES_SUCCESS:
      return merge({}, state, { data: action.data.entities.lessons });

    default:
      return state;
  }
}
