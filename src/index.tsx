import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <HashRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </HashRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
