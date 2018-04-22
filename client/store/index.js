import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import products from './allproducts';
import cart from './cart';
import sidebarReducer from './sidebar'
import filterReducer from './sidebarFilter'
import pastOrders from './pastOrders';

export const reducer = combineReducers({ user, products, cart, sidebarReducer, filterReducer, pastOrders });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
