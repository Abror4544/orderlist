import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import ordersReducer from "./orders-reducer";

let reducers = combineReducers({
  ordersPage: ordersReducer,
});

declare global {
  interface Window { store: any; }
}

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
