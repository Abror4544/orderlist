import { combineReducers, createStore } from "redux";
import ordersReducer from "./orders-reducer";

let reducers = combineReducers({
  ordersPage: ordersReducer,
});

declare global {
  interface Window { store: any; }
}

let store = createStore(reducers);
window.store = store;
export default store;
