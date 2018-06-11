import React from "react";
import { Link } from "react-router-dom";
import store from "/Users/Pascalis/Documents/Code/warriors-for-webpack/components/store.js";

export class singleWarrior extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState().warriors.filter(x => x.id === props.id);
  }

  render() {
    return (
      <div>
        <h2>Info on Warrior</h2>
        <ul>
          <li>this.state.id</li>
          <li>this.state.username</li>
          <li>this.state.weapon</li>
          <li>this.state.rating</li>
          <li>this.state.secret</li>
        </ul>
        <Link to="/show">
          <button>Return</button>
        </Link>
      </div>
    );
  }
}
