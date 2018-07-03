import {
  compose,
  withHandlers,
  withState,
  withStateHandlers,
  withProps,
  getContext
} from "recompose";
import store from "../store";
import React from "react";
import injectSheet from "react-jss";

const initialState = {
  username: "",
  weapon: "",
  rating: 0,
  tipHidden: true
};

const updateUsername = () => event => ({ username: event.target.value });
const updateWeapon = () => event => ({ weapon: event.target.value });
const updateRating = () => event => ({
  tipHidden: false,
  rating: event.target.value
});
const updateTipHidden = () => () => ({ tipHidden: true });

export const handleSubmit = props => () => {
  props.updateTipHidden();
  store.dispatch({
    type: "CREATE_WARRIOR",
    payload: {
      username: props.username,
      weapon: props.weapon,
      rating: props.rating
    }
  });
};

export default compose(
  withStateHandlers(initialState, {
    updateUsername,
    updateWeapon,
    updateRating,
    updateTipHidden
  }),
  getContext(store),
  withHandlers({
    handleSubmit
  })
);
