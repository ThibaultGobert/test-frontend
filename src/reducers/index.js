// Set up your root reducer here...
import { combineReducers } from 'redux';
import ajaxCallsInProgress from 'ajaxStatus';

const rootReducer = combineReducers({
  ajaxCallsInProgress
});

 export default rootReducer;
