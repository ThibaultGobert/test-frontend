// Set up your root reducer here...
import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatus';
import loggedIn from './auth';
import courses from './courses';
import lessons from './lessons';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  loggedIn,
  courses,
  lessons
});

 export default rootReducer;
