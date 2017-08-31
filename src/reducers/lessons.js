import * as types from '../actions/types';
import initialState from './initialState';
import _ from 'lodash';

export default function authReducer(state = initialState.lessons, action) {

  switch (action.type) {
    case types.LOAD_LESSONS_SUCCESS:
      return action.lessons;

    case types.LOAD_LESSON_SLIDES_SUCCESS:
    {
      let lessons = [...state.filter(lesson => lesson.id !== action.lesson.id),
        Object.assign({}, action.lesson)];
      return _.sortBy(lessons, ['order']);
    }

    default:
      return state;
  }
}
