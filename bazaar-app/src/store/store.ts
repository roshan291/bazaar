// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createNewCustomerReducer from './reduces/createNewCustomer';
import sagas from './saga/createNewCustomer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(createNewCustomerReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
