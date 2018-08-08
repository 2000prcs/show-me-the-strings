
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { makeSelectNewString } from './selectors';
import { CHANGE_STRING, INSERT_STRING } from './constants';
import { insertingDBSuccess, insertingDBError } from './actions';


import request from 'utils/request';


/**
 * String request/response handler
 */
export function* saveNewString() {
  const newString = yield select(makeSelectNewString());
  const requestURL = 'http://localhost:3000/strings';
  const requestHeader = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({ newString })
  }
  // to do: add error handling, make use of async
  try {
    yield call(request, requestURL, requestHeader);
    yield put({ type: CHANGE_STRING, string: '' });
  } catch (err){
    console.log(err);
    yield put(insertingDBError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* saveStrings() {
  yield takeEvery(INSERT_STRING, saveNewString);
}