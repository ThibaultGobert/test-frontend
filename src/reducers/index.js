// Set up your root reducer here...
import { combineReducers } from 'redux';
import loggedIn from './auth';
import courses from './courses';
import lessons from './lessons';
import calendar from './calendar';
import currentLesson from './currentLesson';
import classlists from './classlists';
import organisation from'./organisation';
import * as types from '../actions/types';
import initialState from './initialState';

const appReducer = combineReducers({
  loggedIn,
  courses,
  lessons,
  calendar,
  currentLesson,
  classlists,
  organisation
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    state = initialState;
  }

  return appReducer(state, action);
};


export default rootReducer;
