import React from "react";
import Tips from "../tips/view"; //just added brackets to solve the problem
import reducers from "../reducers/warriorReducers";
import { connect } from "react-redux";
import store from "../store";
import { Link } from "react-router";
import { compose } from "recompose";
import injectSheet from "react-jss";
import styles from "./styles";

const Warrior = ({
  updateUsername,
  updateWeapon,
  updateRating,
  updateTipHidden,
  handleSubmit,
  initialState,
  rating,
  tipHidden,
  classes
}) => (
  <div className={classes.containerWrapper}>
    <div className={classes.container}>
      <form className={classes.form}>
        <div className={classes.formHeader}>Registration Form</div>
        <label for="username" />
        <input
          type="text"
          className={classes.inputAndOption}
          id="username"
          placeholder="Name of Warrior"
          onChange={updateUsername}
          autocomplete="off"
        />
        <p />
        <label for="weapon" />
        <input
          type="text"
          className={classes.inputAndOption}
          id="weapon"
          placeholder="Weapon of Warrior"
          onChange={updateWeapon}
          autocomplete="off"
        />
        <p />
        <label for="skill" className={classes.skill}>
          Skill Level
        </label>
        <select onChange={updateRating} id="skill" className={classes.select}>
          {/* prettier-ignore */}
          <option className={classes.select} value="0">
                0
          </option>
          {/* prettier-ignore */}
          <option className={classes.select} value="1">
                1
          </option>
          {/* prettier-ignore */}
          <option className={classes.select} value="2">
                2
          </option>
          {/* prettier-ignore */}
          <option className={classes.select} value="3">
                3
          </option>
          {/* prettier-ignore */}
          <option className={classes.select} value="4">
                4
          </option>
          {/* prettier-ignore */}
          <option className={classes.select} value="5">
                5
          </option>
        </select>
        <p />
        <button type="button" onClick={handleSubmit} className={classes.button}>
          Submit
        </button>
        <Tips rating={parseFloat(rating)} hidden={tipHidden} />
      </form>
    </div>
  </div>
);

export default injectSheet(styles)(Warrior);
