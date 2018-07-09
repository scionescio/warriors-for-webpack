import React from "react";
import { Link } from "react-router-dom";
import store from "../store.js";
import singleWarrior from "./singleWarrior";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import styles from "./styles";

const ShowWarriors = ({ warriors, classes }) => {
  return (
    <div>
      <Link to="/">
        <h3 className={classes.header}> Warrior Registration </h3>
      </Link>
      <h2 className={classes.header}>All added Warriors </h2>
      <ul className={classes.inputAndOutput}>
        {warriors.map(function(warrior, i) {
          return (
            // <Link to={"/show/$"{warrior.id}"}">
            <li key={i}>
              {"NAME: " +
                warrior.username +
                " , RATING: " +
                warrior.rating +
                " , WEAPON: " +
                warrior.weapon}
            </li>
            // </Link>
          );
        })}
      </ul>
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

const ShowWarriorsWithStyle = injectSheet(styles)(ShowWarriors);
//this is ugly
export default connect(mapStateToProps)(ShowWarriorsWithStyle);
