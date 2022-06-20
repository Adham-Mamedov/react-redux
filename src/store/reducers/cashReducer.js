const defaultState = {
  amount: 0
}

export const ADD_CASH = 'ADD_CASH';
export const ASYNC_ADD_CASH = 'ASYNC_ADD_CASH';
export const GET_CASH = 'GET_CASH';
export const ASYNC_GET_CASH = 'ASYNC_GET_CASH';

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return {...state, amount: state.amount + action.payload}
    case GET_CASH:
      return {...state, amount: state.amount - action.payload}
    default:
      return state;
  }
}

export const addCashAction = (payload) => ({type: ADD_CASH, payload})
export const asyncAddCashAction = (payload) => ({type: ASYNC_ADD_CASH, payload})
export const getCashAction = (payload) => ({type: GET_CASH, payload})
export const asyncGetCashAction = (payload) => ({type: ASYNC_GET_CASH, payload})