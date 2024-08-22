// import { createStore } from 'redux';
// import reducers from '../reducers/Reducers';
// import { combineReducers } from 'redux';
// import Reducers from '../reducers/Reducers';
// import Reducers2 from '../reducers/Reducers2';
// import AddressReducers from '../reducers/AddressReducers';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// // const routeReducer = combineReducers({ Reducers, Reducers2, AddressReducers })
// const store = createStore(routeReducer);

// export default store;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
// import { default as AuthSlice } from "../Slice/AuthSlice";

import Reducers from '../reducers/Reducers';
import Reducers2 from '../reducers/Reducers2';
import AddressReducers from '../reducers/AddressReducers';
import OrderReducers from '../reducers/OrderReducers';

let presistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
// let rootReducer = combineReducers({
//     auth:AuthSlice
// })
let rootReducer = combineReducers({ Reducers, Reducers2, AddressReducers, OrderReducers });

let presistedReducer = persistReducer(presistConfig, rootReducer);

const store = configureStore({
    reducer: presistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check
        }),
});
export default store;
