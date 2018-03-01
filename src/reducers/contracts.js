import merge from 'lodash/merge';
import * as types from '../actions/types/contracts';
import initialState from './initialState';

export default function contractsReducer(state = initialState.contracts, action) {
  switch (action.type) {
    case types.FETCH_CONTRACTS_START:
      return merge({}, state, { loading: true });

    case types.FETCH_CONTRACTS_SUCCESS: {
      return merge({}, state, {
        data: action.data.entities.contracts,
        loading: false,
        error: null,
        hasError: false,
      });
    }

    case types.FETCH_CONTRACTS_ERROR:
      return merge({}, state, {
        loading: false,
        hasError: true,
        error: action.error });

    default:
      return state;
  }
}
