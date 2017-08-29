import * as types from '../actions/types';
import initialState from './initialState';

export default function authReducer(state = initialState.courses, action) {

  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}