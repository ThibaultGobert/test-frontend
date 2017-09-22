import * as types from '../actions/types';
import initialState from './initialState';
import _ from 'lodash';

export default function lessonSlidesReducer(state = initialState.currentLesson, action) {
  switch (action.type) {
    case types.FETCH_LESSON_SLIDES:
      debugger;
      return Object.assign({}, { data:{}, loading: true, error: null, hasError: false});

    case types.LOAD_LESSON_SLIDES_SUCCESS:
      debugger;
      return Object.assign({}, { data: action.lessonInfo, loading: false, error: null, hasError: false});

    case types.FETCH_LESSON_SLIDES_ERROR:
      return Object.assign({}, { data: {}, loading: false, error: action.error, hasError: true});

    default:
      return state;
  }
}
