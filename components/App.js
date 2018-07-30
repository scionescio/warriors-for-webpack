import React from "react";
import NewWarrior from "./warriorAdd/index.js";
import ShowWarriors from "./warriorDisplay/mockWarriors";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import store from "./store.js";
import injectSheet from "react-jss";
import Jiraya from "../images/Jiraya.png";

const App = ({ classes }) => (
  <div className={classes.background}>
    <Link to="/" className={classes.header}>
      Evening Refuge Warrior Data Storage
    </Link>
    <NewWarrior />
    <Link to="/list" className={classes.button}>
      View Listed Warriors
    </Link>
  </div>
);

const styles = {
  body: {
    margin: 0
  },
  header: {
    padding: [50, 50, 20],
    textAlign: "center",
    display: "block",
    fontSize: 25,
    fontFamily: "OpenSans, sans-serif",
    fontWeight: 300,
    textDecoration: "none",
    color: "rgba(250, 235, 215, 1)"
  },
  background: {
    backgroundImage: `url(${Jiraya})`,
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  button: {
    display: "block",
    padding: [10, 0],
    textDecoration: "none",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 200,
    color: "white",
    backgroundColor: "rgba(128, 136, 99, 0.9)",
    margin: "0 auto",
    width: 648
  }
};

export default injectSheet(styles)(App);

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> Warrior Registration Page </h1>
//         <NewWarrior />
//         <Link to="/show">
//           <button>Show added warriors</button>
//         </Link>
//       </div>
//     );
//   }
// }

// const Main = () => (
//   <main>
//     <Switch>
//       <Route path="/" component={NewWarrior} />
//       <Route path="/show" component={ShowWarriors} />
//     </Switch>
//   </main>
// );
