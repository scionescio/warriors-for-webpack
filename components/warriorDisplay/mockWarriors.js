import React from "react";
import { Link } from "react-router-dom";
import store from "../store.js";
import singleWarrior from "./singleWarrior";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import styles from "./styles";

const ShowWarriors = ({ warriors, classes }) => {
  return (
    <div className={classes.backgroundImage}>
      <Link to="/" className={classes.header}>
        Evening Refuge Warrior Data Storage
      </Link>
      <div className={classes.containerWrapper}>
        <div className={classes.container}>
          <form className={classes.form}>
            <div className={classes.formHeaderNew}>Register</div>
            <ul className={classes.inputAndOutput}>
              {warriors.map(function(warrior, i) {
                return (
                  // <Link to={"/show/$"{warrior.id}"}">
                  <div key={i} className={classes.skill}>
                    {"NAME: " +
                      warrior.username +
                      " , WEAPON: " +
                      warrior.weapon +
                      " , RATING: " +
                      warrior.rating}
                  </div>
                  // </Link>
                );
              })}
            </ul>
          </form>
        </div>
      </div>
      <Link to="/" className={classes.superButton}>
        Add More Warriors
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
