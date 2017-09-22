import * as types from './types';

export function beginAjaxCall(requestType, meta) {
  if (!requestType) {
    return { type: types.AJAX_CALL_BEGIN };
  }

  return { type: requestType, meta};
}

export function ajaxCallError(errorType, error) {
  return { type: errorType, error };
}
