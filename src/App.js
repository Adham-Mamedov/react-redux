import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {addCustomerAction, removeCustomerAction} from './store/reducers/customerReducer';
import {addCashAction, getCashAction} from './store/reducers/cashReducer';
import {fetchCustomers} from './store/asyncActions/customer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.amount)
  const customers = useSelector((state) => state.customer.list)

  const addCash = useCallback((cash) => {
    dispatch(addCashAction(cash))
  }, [dispatch])

  const getCash = useCallback((cash) => {
    dispatch(getCashAction(cash))
  }, [dispatch])

  const addCustomer = useCallback((name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }, [dispatch])

  const removeCustomer = useCallback((id) => {
    dispatch(removeCustomerAction(id))

  }, [dispatch])


  return (
      <div className="flex flex-col gap-5 justify-center items-center pt-32 h-full w-full">
        <h1 className="text-3xl">{cash}</h1>

        <div className="flex gap-3">
          <button className="bg-green-400 py-1 px-3 rounded"
                  onClick={() => addCash(Number(prompt('Enter Amount')))}>Add
          </button>
          <button className="bg-red-400 py-1 px-3 rounded"
                  onClick={() => getCash(Number(prompt('Enter Amount')))}>Withdrew
          </button>
          <button className="bg-blue-400 py-1 px-3 rounded"
                  onClick={() => addCustomer(prompt('Enter Customer Name'))}>Add Customer
          </button>
          <button className="bg-blue-500 py-1 px-3 rounded"
                  onClick={() => dispatch(fetchCustomers())}>Fetch Customers
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {customers.length === 0 ? "No Customers yet." : (
              <div>
                <h2 className="text-center font-bold text-xl">Customers:</h2>
                {
                  customers.map(customer => (
                      <p key={customer.id} className="text-center mt-2 cursor-pointer border border-gray-300 border-solid px-3 py-0.5 rounded"
                         onClick={() => removeCustomer(customer.id)}>{customer.name}</p>
                  ))
                }
              </div>
          )}
        </div>
      </div>
  );
}

export default App;
