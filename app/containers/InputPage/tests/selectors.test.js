import { fromJS } from 'immutable';

import { selectInput, makeSelectNewString } from '../selectors';

describe('selectInput', () => {
  it('should select the input state', () => {
    const inputState = fromJS({
      input: {},
    });
    const mockedState = fromJS({
      input: inputState,
    });
    expect(selectInput(mockedState)).toEqual(inputState);
  });
});

describe('makeSelectNewString', () => {
  const stringSelector = makeSelectNewString();
  it('should select the string', () => {
    const newString = 'momo';
    const mockedState = fromJS({
      input: {
        newString,
      },
    });
    expect(stringSelector(mockedState)).toEqual(newString);
  });
});