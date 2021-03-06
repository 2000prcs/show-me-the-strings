import { CHANGE_STRING, INSERT_STRING, INSERT_ERROR } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} string The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_STRING
 */
export function changeCurrentString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

/**
 * Insert a new string to DB
 * *
 * @return {object}      An action object with a type of INSERT_STRING
 */
export function insertString() {
  return {
    type: INSERT_STRING,
  };
}


/**
 * Error handling while insering a new string to DB
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of INSERT_ERROR passing the error
 */
export function insertingDBError(error) {
  return {
    type: INSERT_ERROR,
    error,
  };
}
