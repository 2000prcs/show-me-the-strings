/**
 * Gets the strings 
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_STRINGS } from 'containers/App/constants';
import { stringsFetched, stringsFetchingError } from 'containers/App/actions';

import request from 'utils/request';

export const requestURL = 'http://localhost:3000/strings';

/**
 * Strings request/response handler
 */
export function* fetchStrings() {

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    yield put(stringsFetched(strings));
  } catch (err) {
    yield put(stringsFetchingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getData() {
  // Watches for GET_STRINGS actions and calls fetchStrings when one comes in.
  yield takeLatest(GET_STRINGS, fetchStrings);
}