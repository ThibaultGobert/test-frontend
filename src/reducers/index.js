// Set up your root reducer here...
import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatus';
import loggedIn from './auth';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  loggedIn
});

 export default rootReducer;
