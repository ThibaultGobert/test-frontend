import {
  FETCH_LOCATIONS_START,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_ERROR,
} from './types';

export function fetchLocationsStart() {
  return { type: FETCH_LOCATIONS_START };
}

export function fetchLocationsSuccess(data) {
  return { type: FETCH_LOCATIONS_SUCCESS, data };
}

export function fetchLocationsError(error) {
  return { type: FETCH_LOCATIONS_ERROR, error };
}
