import {
  FETCH_NOTES_START,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_ERROR,
} from './types';

export function fetchNotesStart() {
  return { type: FETCH_NOTES_START };
}

export function fetchNotesSuccess(notes) {
  return { type: FETCH_NOTES_SUCCESS, notes };
}

export function fetchNotesError(error) {
  return { type: FETCH_NOTES_ERROR, error };
}
