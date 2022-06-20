import {all} from 'redux-saga/effects';
import {userWatcher} from './userSage';
import {cashWatcher} from './cashSage';

export function* rootWatcher() {
  yield all([
      userWatcher(),
      cashWatcher()
  ])
}