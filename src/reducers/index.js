// Set up your root reducer here...
import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatus';
import loggedIn from './auth';
import courses from './courses';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  loggedIn,
  courses
});

 export default rootReducer;
