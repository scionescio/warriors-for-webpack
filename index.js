import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./components/store";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ShowWarriors from "./components/warriorDisplay/mockWarriors.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list" component={ShowWarriors} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

store.dispatch({
  type: "CREATE_WARRIOR",
  payload: {
    username: "Hinata",
    weapon: "Byakugan",
    rating: "3"
  }
});
