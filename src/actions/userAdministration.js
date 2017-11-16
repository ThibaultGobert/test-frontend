import * as types from './types';
import userAdministrationApi from '../api/userAdministration';

export function markPresenceSuccess(response) {
  return {type: types.MARK_PRESENCE_SUCCESS, response };
}

export function markPresence() {
  return function(dispatch) {
    dispatch(beginAjaxCall(types.MARK_PRESENCE));
    return userAdministrationApi.markPresence().then((response) => {
      dispatch(markPresenceSuccess(response));
    }).catch(error => {
      dispatch(ajaxCallError(types.MARK_PRESENCE_ERROR, error));
    });
  };
}
