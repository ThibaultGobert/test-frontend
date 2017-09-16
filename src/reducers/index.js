// Set up your root reducer here...
import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatus';
import loggedIn from './auth';
import courses from './courses';
import lessons from './lessons';
import calendar from './calendar';
import * as types from '../actions/types';
import initialState from './initialState';

const appReducer = combineReducers({
  ajaxCallsInProgress,
  loggedIn,
  courses,
  lessons,
  calendar
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    state = initialState;
  }

  return appReducer(state, action);
};


export default rootReducer;
