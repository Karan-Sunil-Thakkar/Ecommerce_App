import { createStore } from 'redux';
import reducers from '../reducers/Reducers';
import { combineReducers } from 'redux';
import Reducers from '../reducers/Reducers';
import Reducers2 from '../reducers/Reducers2';
import AddressReducers from '../reducers/AddressReducers';


const routeReducer = combineReducers({ Reducers, Reducers2, AddressReducers })
const store = createStore(routeReducer);

export default store;
