import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from './reducers/rootReducer';
import {rootWatcher} from '../saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [thunk, sagaMiddleware]
})

sagaMiddleware.run(rootWatcher)