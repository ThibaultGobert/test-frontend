import {
  FETCH_LOCATION_START,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_ERROR,
} from './types';

export function fetchLocationStart() {
  return { type: FETCH_LOCATION_START };
}

export function fetchLocationSuccess(data) {
  return { type: FETCH_LOCATION_SUCCESS, data };
}

export function fetchLessonsError(error) {
  return { type: FETCH_LOCATION_ERROR, error };
}
