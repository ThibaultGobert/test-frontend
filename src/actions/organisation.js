import * as types from './types';
import organisationApi from '../api/organisation';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export function loadAllLevelsSuccess(levels) {
  return {type: types.LOAD_LEVELS_SUCCESS, levels };
}

export function loadAllGroupsSuccess(groups) {
  return {type: types.LOAD_GROUPS_SUCCESS, groups };
}

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

