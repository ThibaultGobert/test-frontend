import * as types from '../actions/types';
import initialState from './initialState';
import {FETCH_LESSON_SLIDES_SUCCESS} from "../actions/types/slides";
import _ from 'lodash';
import {FETCH_ATTENDANCES_SUCCESS} from "../actions/types/lesson";

export default function lessonReducer(state = initialState.lessons, action) {
  switch (action.type) {
    case types.FETCH_LESSONS_START:
      return Object.assign({}, { data: {}, loading: true, error: null, hasError: false });

    case types.FETCH_LESSONS_SUCCESS:
      return Object.assign(
        {},
        { data: action.lessons, loading: false, error: null, hasError: false }
      );

    case types.FETCH_LESSONS_ERROR:
      return Object.assign({}, { data: {}, loading: false, error: action.error, hasError: true });

    case types.FETCH_COURSES_SUCCESS:
      return  Object.assign({}, state, {
        data: action.data.entities.lessons,
        loading: false,
        error: null,
        hasError: false
      });

    case FETCH_LESSON_SLIDES_SUCCESS:
      return _.merge({}, state, {data: action.data.entities.lessonContent });

    case FETCH_ATTENDANCES_SUCCESS:
      return _.merge({}, state, {data: {[action.data.lessonId] : { attendances: action.data.result}}});

    default:
      return state;
  }
}
