import { fromJS } from 'immutable';

import { CHANGE_STRING, INSERT_STRING } from './constants';

// The initial state of the App
export const initialState = fromJS({
  newString: '',
  saved: false,
});

function inputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return state.set('newString', action.string);
    case INSERT_STRING:
      return state.set('saved', true);
    default:
      return state;
  }
}

export default inputReducer;