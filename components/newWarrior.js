import React from "react";
import PasswordMask from "react-password-mask";
import { Tips } from "./tips/view"; //just added brackets to solve the problem
import reducers from "./reducers/warriorReducers";
import { connect } from "react-redux";
import store from "./store";
import { Link } from "react-router";

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({ type: "INC" });

export default class NewWarrior extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      username: "",
      weapon: "",
      rating: 0,
      secret: "",
      tipHidden: true,
      mockDataSent: false
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updateWeapon = this.updateWeapon.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateTipHidden = this.updateTipHidden.bind(this);
    this.updateId = this.updateId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSecret(event) {
    this.setState({ secret: event.target.value });
    // console.log("The warrior's secret is:" + event.target.value)
  }

  updateId() {
    this.setState({ id: this.state.id + 1 });
  }

  updateUsername(event) {
    this.setState({ username: event.target.value });
    // console.log("The warrior's name is:" + event.target.value)
  }

  updateWeapon(event) {
    this.setState({ weapon: event.target.value });
    // console.log("The warrior's weapon is:" + event.target.value)
  }

  updateRating(event) {
    this.setState({ tipHidden: true }); //on change tip is deleted
    this.setState({ rating: event.target.value });
    // console.log("The warrior's rating is:" + event.target.value)
  }

  updateTipHidden(stillHidden) {
    this.setState({ tipHidden: stillHidden });
    // console.log("The warrior's hidden is:" + this.state.tipHidden)
  }

  handleSubmit() {
    this.updateTipHidden(false);
    this.updateId();
    store.dispatch({
      type: "CREATE_WARRIOR",
      payload: {
        id: this.state.id,
        username: this.state.username,
        weapon: this.state.weapon,
        rating: this.state.rating,
        secret: this.state.secret
      }
    });
    //only do that if submit is successful
    // const dispatch = Promise((resolve, reject) => {
    //   store.dispatch({ type: "CREATE_WARRIOR", payload: this });
    // }).then(() => {
    //   this.updateTipHidden(false);
    //   this.updateId(); //only do that if submit is successful
    // });
  }

  componentDidMount() {
    //   if (!this.state.mockDataSent) {
    //     store.dispatch({
    //       type: "CREATE_WARRIOR",
    //       payload: {
    //         id: -1,
    //         username: "Naruto",
    //         weapon: "Rasengan",
    //         rating: "5",
    //         secret: "Nine-tailed Fox"
    //       }
    //     });
    // store.dispatch({
    //   type: "CREATE_WARRIOR",
    //   payload: {
    //     id: -2,
    //     username: "Hinata",
    //     weapon: "Byakugan",
    //     rating: "3",
    //     secret: "Wife-Mode"
    //   }
    // });
    //   this.setState({ mockDataSent: true });
    // }
  }

  render() {
    return (
      <div>
        <ol>
          <form> Name </form>
          <input type="text" onChange={this.updateUsername} />
          <form> Weapon </form>
          <input type="text" onChange={this.updateWeapon} />
          <form> Secret Ability </form>
          <PasswordMask
            id="password"
            name="password"
            value={this.state.secret}
            onChange={this.updateSecret.bind(this)}
            useVendorStyles={false}
          />
          <p />
          <p />
          <p />
          <form> Skill Level </form>
          <select onChange={this.updateRating}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <p />
          <input type="submit" onClick={this.handleSubmit} />
        </ol>
        <ol>
          <Tips
            rating={parseFloat(this.state.rating)}
            hidden={this.state.tipHidden}
          />
        </ol>
      </div>
    );
  }
}
