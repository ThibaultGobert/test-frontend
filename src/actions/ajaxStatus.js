import * as types from './types';

export function beginAjaxCall(requestType, data) {
  if (!requestType) {
    return { type: types.AJAX_CALL_BEGIN };
  }

  return { type: requestType, data};
}

export function ajaxCallError(errorType, error, data) {
  return { type: errorType, error, data};
}
