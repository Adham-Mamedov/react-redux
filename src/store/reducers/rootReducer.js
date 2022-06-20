import {combineReducers} from 'redux';
import {cashReducer} from './cashReducer';
import {customerReducer} from './customerReducer';

export const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer
})