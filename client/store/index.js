import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import products from './allproducts';
import cart from './cart';
<<<<<<< HEAD
import pastOrders from './pastOrders';

export const reducer = combineReducers({ user, products, cart, pastOrders });
=======
import sidebarReducer from './sidebar'

export const reducer = combineReducers({ user, products, cart, sidebarReducer });
>>>>>>> master
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
