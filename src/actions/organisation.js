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
