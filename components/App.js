import React from "react";
import NewWarrior from "./newWarrior";
import ShowWarriors from "./warriorDisplay/mockWarriors";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import store from "/Users/Pascalis/Documents/Code/warriors-for-webpack/components/store.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NewWarrior />
        <Link to="/show">
          <button>Show added warriors</button>
        </Link>
      </div>
    );
  }
}

// const Main = () => (
//   <main>
//     <Switch>
//       <Route path="/" component={NewWarrior} />
//       <Route path="/show" component={ShowWarriors} />
//     </Switch>
//   </main>
// );
