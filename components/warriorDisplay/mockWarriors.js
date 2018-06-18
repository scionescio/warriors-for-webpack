import React from "react";
import { Link } from "react-router-dom";
import store from "../store.js";
import singleWarrior from "./singleWarrior";
import { connect } from "react-redux";

const warriorDatabase = {
  warriors: [
    {
      id: 1,
      rating: 5,
      secret: "Nine-tailed Fox",
      username: "Naruto",
      weapon: "Rasengan"
    },
    {
      id: 2,
      rating: 4,
      secret: "Wife-Mode",
      username: "Hinata",
      weapon: "Biakugan"
    }
  ],
  all: function() {
    return this.warriors;
  },
  get: function(id) {
    const isWarrior = w => w.number === id;
    return this.warriors.find(isWarrior);
  }
};

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
