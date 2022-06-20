import {put, takeEvery} from 'redux-saga/effects';
import {addCashAction, ASYNC_ADD_CASH, ASYNC_GET_CASH, getCashAction} from '../store/reducers/cashReducer';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function* incrementWorker({payload}) {
  yield delay(1000);
  yield put(addCashAction(payload))
}

function* decrementWorker() {
  yield delay(1000);
  yield put(getCashAction)
}

export function* cashWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, incrementWorker);
  yield takeEvery(ASYNC_GET_CASH, decrementWorker);
}

