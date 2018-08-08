/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { GET_STRINGS, GET_STRINGS_SUCCESS, GET_STRINGS_ERROR } from './constants';

/**
 * Fetch the strings, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_STRINGS
 */
export function getStrings() {
  return {
    type: GET_STRINGS,
  };
}

/**
 * Dispatched when the strings are loaded by the request saga
 *
 * @param  {array} strings The strings data
 *
 * @return {object}      An action object with a type of GET_STRINGS_SUCCESS passing the repos
 */
export function stringsFetched(strings) {
  return {
    type: GET_STRINGS_SUCCESS,
    strings,
  };
}

/**
 * Dispatched when fetching the strings fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_STRINGS_ERROR passing the error
 */
export function stringsFetchingError(error) {
  return {
    type: GET_STRINGS_ERROR,
    error,
  };
}

