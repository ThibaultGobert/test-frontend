import {
  FETCH_NOTES_START,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_ERROR,
  EDIT_NOTE_START,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_ERROR,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_ERROR,
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

export function addNoteStart() {
  return { type: ADD_NOTE_START };
}

export function addNoteSuccess(note) {
  return { type: ADD_NOTE_SUCCESS, note };
}

export function addNoteError(error) {
  return { type: ADD_NOTE_ERROR, error };
}

export function editNoteStart() {
  return { type: EDIT_NOTE_START };
}

export function editNoteSuccess(note) {
  return { type: EDIT_NOTE_SUCCESS, note };
}

export function editNoteError(error) {
  return { type: EDIT_NOTE_ERROR, error };
}
