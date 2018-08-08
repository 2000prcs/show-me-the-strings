/**
 * InputPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { select } from '../../../node_modules/redux-saga/effects';

const selectInput = state => state.get('input', initialState);

const makeSelectNewString = () =>
  createSelector(selectInput, inputState => inputState.get('newString'));

export { selectInput, makeSelectNewString };