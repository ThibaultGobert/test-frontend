import { FINISH_BOOTSTRAP } from '../actions/types';
import initialState from './initialState';

function applicationReducer(state = initialState.application, action) {
  switch (action.type) {
    case FINISH_BOOTSTRAP:
      return { ...state, bootstrapped: true };

    default:
      return state;
  }
}

export default applicationReducer;
