import * as types from '../actions/types';
import initialState from './initialState';
import _ from 'lodash';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == "_SUCCESS";
}

function startsWithFetch(type) {
  return _.includes(type, 'FETCH');
}

export default function ajaxStatusReducer(
  state = initialState.ajaxCallsInProgress,
  action ) {
  if (startsWithFetch()) {
    return state + 1;
  } else if(actionTypeEndsInSuccess(action.type) || action.type == types.AJAX_CALL_ERROR) {
    return state - 1;
  }

  return state;
}
