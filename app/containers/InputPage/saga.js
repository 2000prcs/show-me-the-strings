
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { makeSelectNewString } from './selectors';
import { CHANGE_STRING, INSERT_STRING } from './constants';
import { insertingDBError } from './actions';


import request from 'utils/request';


/**
 * String request/response handler
 */
export function* saveString() {
  const newString = yield select(makeSelectNewString());
  const requestURL = 'http://localhost:3000/strings';
  const requestHeader = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({ newString })
  }

  try {
    yield call(request, requestURL, requestHeader);
    yield put({ type: CHANGE_STRING, string: '' });
  } catch (err){
    alert('Error occured while storing your string');
    yield put(insertingDBError(err));
  }
  alert('Stored your string successfully!');
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* saveStrings() {
  yield takeEvery(INSERT_STRING, saveString);
}