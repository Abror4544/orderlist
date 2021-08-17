import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import InfoContainer from "./components/Info/InfoContainer";
import OrdersContainer from "./components/Orders/OrdersContainer";

const App = (props: any) => {
  return (
    <div className="appWrapper">
      <Header />
      <Route exact
        render={(state) => (
          <OrdersContainer {...props} state={props.state} />
        )}
        path="/"
      />
      <Route {...props} render={(history: any, state: any) => (
        <InfoContainer {...props} state={props.state} history={history} />
      )}
        path="/Info/:orderId?"
      />
    </div>
  );
};

export default App;
