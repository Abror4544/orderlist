import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Orders from "./components/Orders/Orders";

const App = (props) => {
  return (
    <div className="appWrapper">
      <Header />
      <Route
        render={(state) => (
          <Orders state={props.state} />
        )}
        path="/Main"
      />
      <Route
        render={(history, state) => (
          <Info state={props.state} history={history} />
        )}
        path="/Info/:orderId?"
      />
    </div>
  );
};

export default App;
