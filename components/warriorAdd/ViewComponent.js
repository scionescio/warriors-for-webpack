import React from "react";
import PasswordMask from "react-password-mask";
import { Tips } from "../tips/view"; //just added brackets to solve the problem
import reducers from "../reducers/warriorReducers";
import { connect } from "react-redux";
import store from "../store";
import { Link } from "react-router";

const Warrior = ({ username }) => (
  <div>
    <h1>Hello World</h1>
  </div>
);

export default Warrior;
