import {
  FETCH_LEVELS_START,
  FETCH_LEVELS_SUCCESS,
  FETCH_LEVELS_ERROR,
  FETCH_GROUPS_START,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_ERROR
} from './types';

export function fetchLevelsStart() {
  return { type: FETCH_LEVELS_START };
}

export function fetchLevelsSuccess(response) {
  return { type: FETCH_LEVELS_SUCCESS, response };
}

export function fetchLevelsError(error) {
  return { type: FETCH_LEVELS_ERROR, error };
}

export function fetchGroupsStart() {
  return { type: FETCH_GROUPS_START };
}

export function fetchGroupsSuccess(response) {
  return { type: FETCH_GROUPS_SUCCESS, response };
}

export function fetchGroupsError(error) {
  return { type: FETCH_GROUPS_ERROR, error };
}

/*
export function loadAllLevels() {
  return function(dispatch) {
    dispatch(beginAjaxCall(types.FETCH_LEVELS));
    return organisationApi.getAllLevels().then((levels) => {
      dispatch(loadAllLevelsSuccess(levels));
    }).catch(error => {
      dispatch(ajaxCallError(types.FETCH_LEVELS_ERROR, error));
    });
  };
}

export function loadAllGroups() {
  return function(dispatch) {
    dispatch(beginAjaxCall(types.FETCH_GROUPS));
    return organisationApi.getAllGroups().then((groups) => {
      dispatch(loadAllGroupsSuccess(groups));
    }).catch(error => {
      dispatch(ajaxCallError(types.FETCH_GROUPS_ERROR, error));
    });
  };
}
*/
