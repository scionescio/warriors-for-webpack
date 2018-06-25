import { compose, withHandlers, withState } from "recompose";
import React from "react";

export default compose(withState("username"));
