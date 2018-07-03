import React from "react";
import { Tips } from "../tips/view"; //just added brackets to solve the problem
import reducers from "../reducers/warriorReducers";
import { connect } from "react-redux";
import store from "../store";
import { Link } from "react-router";
import { compose } from "recompose";
import injectSheet from "react-jss";

const Warrior = props => (
  <form>
    <label for="username"> Name </label>

    <input type="text" id="username" onChange={props.updateUsername} />
    <p />
    <label for="weapon"> Weapon </label>
    <input type="text" id="weapon" onChange={props.updateWeapon} />
    <p />
    <label for="skill"> Skill Level </label>
    <select onChange={props.updateRating} id="skill">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <p />
    <button type="button" onClick={props.handleSubmit}>
      Submit
    </button>
    <Tips rating={parseFloat(props.rating)} hidden={props.tipHidden} />
  </form>
);

export default Warrior;
