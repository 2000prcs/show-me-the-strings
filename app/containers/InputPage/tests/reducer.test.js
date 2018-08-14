import { fromJS } from 'immutable';

import inputReducer from '../reducer';
import { changeCurrentString } from '../actions';

describe('inputReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      newString: '',
      saved: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(inputReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeCurrentString action correctly', () => {
    const fixture = 'momo';
    const expectedResult = state.set('newString', fixture);

    expect(inputReducer(state, changeCurrentString(fixture))).toEqual(expectedResult);
  });
});