const defaultState = {
  list: []
}

export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";
export const FETCH_CUSTOMERS = "FETCH_CUSTOMERS";
export const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMER:
      return {...state, list: [...state.list, ...action.payload]};
    case ADD_CUSTOMER:
      return {...state, list: [...state.list, action.payload]};
    case REMOVE_CUSTOMER:
      return {...state, list: state.list.filter(customer => customer.id !== action.payload)};
    default:
      return state;
  }
}

export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMER, payload})
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const fetchCustomersAction = (payload) => ({type: FETCH_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})