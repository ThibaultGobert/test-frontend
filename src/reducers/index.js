// Set up your root reducer here...
import { combineReducers } from 'redux';
import loggedIn from './auth';
import courses from './courses';
import lessons from './lessons';
import organisation from './organisation';
import students from './students';
import teachers from './teachers';
import slides from './slides';
import locations from './locations';
import application from './application';
import attendances from './attendances';
import notes from './notes';
import initialState from './initialState';
import { LOGOUT } from '../actions/types';

const appReducer = combineReducers({
  loggedIn,
  courses,
  lessons,
  organisation,
  students,
  teachers,
  locations,
  application,
  slides,
  attendances,
  notes,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
