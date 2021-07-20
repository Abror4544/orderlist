import { combineReducers, createStore } from "redux";
import ordersReducer from "./orders-reducer";

let reducers = combineReducers({
  ordersPage: ordersReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
