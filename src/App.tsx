import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import OrdersContainer from "./components/Orders/OrdersContainer";

const App = (props: any) => {
  return (
    <div className="appWrapper">
      <Header />
      <Route
        render={(state) => (
          <OrdersContainer {...props} state={props.state} />
        )}
        path="/Main"
      />
      <Route {...props} render={(history :any, state: any) => (
          <Info {...props} state={props.state} history={history} />
        )}
        path="/Info/:orderId?"
      />
    </div>
  );
};

export default App;
