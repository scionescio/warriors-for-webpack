import React from "react";
import { Link } from "react-router-dom";
import store from "../store.js";
import singleWarrior from "./singleWarrior";
import { connect } from "react-redux";

const ShowWarriors = props => {
  return (
    <div>
      <h2>All added Warriors</h2>
      <ol>
        {props.warriors.map(function(warrior, i) {
          return (
            // <Link to={"/show/$"{warrior.id}"}">
            <li key={i}>{warrior.username + " " + warrior.rating}</li>
            // </Link>
          );
        })}
      </ol>
      <Link to="/">
        <button>Add new warrior</button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    warriors: state.warriors
  };
};

export default connect(mapStateToProps)(ShowWarriors);
