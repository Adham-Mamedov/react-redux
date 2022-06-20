import {put, call, takeEvery} from 'redux-saga/effects';
import {addManyCustomerAction, FETCH_CUSTOMERS} from '../store/reducers/customerReducer';

function fetchUsers() {
  console.log('fetching')
  return fetch('https://jsonplaceholder.typicode.com/users?_limit=5').then(response => response.json())
}

function* userWorker() {
  const data = yield call(fetchUsers);
  console.log(data)
  yield put(addManyCustomerAction(data));
}

export function* userWatcher() {
  yield takeEvery(FETCH_CUSTOMERS, userWorker)
}