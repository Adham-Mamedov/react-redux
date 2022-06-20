import {addManyCustomerAction} from '../reducers/customerReducer';

export function fetchCustomers() {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch(addManyCustomerAction(data)))
  }
}