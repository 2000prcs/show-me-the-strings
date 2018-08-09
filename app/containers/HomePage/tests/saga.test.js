/**
 * Tests for HomePage sagas
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_STRINGS } from 'containers/App/constants';
import { stringsFetched, stringsFetchingError } from 'containers/App/actions';
import request from 'utils/request';

import getData, { fetchStrings, requestURL } from '../saga';


describe('getData Saga', () => {
  const getDataGenerator = fetchStrings();

  it('Should request strings', () => {
    expect(getDataGenerator.next().value).toEqual(call(request, requestURL));    
  });

  it('Should dispatch the stringsFetched action if it requests the data successfully', () => {
    const response = [
      {
        id: 1,
        string: 'String 1',
        createdat: '2018-08-09',
      },
      {
        id: 2,
        string: 'String 2',
        createdat: '2018-08-09',
      },
    ];
    expect(getDataGenerator.next(response).value).toEqual(put(stringsFetched(response)));
  });
  
  it('Should be done after the action', () => {
    expect(getDataGenerator.next().done).toEqual(true);
  });
});


describe('getData Saga', () => {
  const getDataGenerator = fetchStrings();
  it('Should call the stringsFetchingError action if the response errors', () => {
    getDataGenerator.next();
    expect(getDataGenerator.throw('error').value).toEqual(put(stringsFetchingError('error')));
  });

  it('Should be done after the action', () => {
    expect(getDataGenerator.next().done).toEqual(true);
  });
});

describe('getData Saga', () => {
  const getDataSaga = getData();

  it('Should start task to watch for GET_STRINGS action', () => {
    const takeLatestDescriptor = getDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_STRINGS, fetchStrings));
  });
});