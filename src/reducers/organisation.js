import * as types from '../actions/types';
import initialState from './initialState';

export default function levelsReducer(state = initialState.organisation, action) {
  switch (action.type) {
    case types.FETCH_LEVELS_START:
      return Object.assign({}, state, {
        levels: { data: [], loading: true, error: null, hasError: false }
      });
    case types.FETCH_LEVELS_SUCCESS:
      return Object.assign({}, state, {
        levels: { data: action.levels, loading: false, error: null, hasError: false }
      });
    case types.FETCH_LEVELS_ERROR:
      return Object.assign({}, state, {
        levels: { data: [], loading: false, error: action.error, hasError: true }
      });

    case types.FETCH_GROUPS_START:
      return Object.assign({}, state, {
        groups: { data: [], loading: true, error: null, hasError: false }
      });
    case types.FETCH_GROUPS_SUCCESS:
      return Object.assign({}, state, {
        groups: { data: action.groups, loading: false, error: null, hasError: false }
      });
    case types.FETCH_GROUPS_ERROR:
      return Object.assign({}, state, {
        groups: { data: [], loading: false, error: action.error, hasError: true }
      });

    default:
      return state;
  }
}
