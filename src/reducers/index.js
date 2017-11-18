// Set up your root reducer here...
import { combineReducers } from 'redux';
import loggedIn from './auth';
import courses from './courses';
import lessons from './lessons';
import currentLesson from './currentLesson';
import organisation from './organisation';
import users from './users';
import locations from './locations';
import initialState from './initialState';
import { LOGOUT } from '../actions/types';

const appReducer = combineReducers({
  loggedIn,
  courses,
  lessons,
  currentLesson,
  organisation,
  users,
  locations
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
