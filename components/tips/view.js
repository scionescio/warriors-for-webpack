import React from "react";
import injectSheet from "react-jss";

const Tip = ({ rating, hidden, classes }) => (
  <div className={classes.tip}>
    <div>
      {hidden
        ? "" //correct way with hidden?
        : rating > 2
          ? "May your warriors be victorious"
          : "Consider training your warrior before assigning him to a mission"}
    </div>
  </div>
);

const styles = {
  tip: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontWeight: 200,
    paddingRight: 5,
    fontFamily: "Roboto, sans-serif",
    paddingTop: 200
  }
};

export default injectSheet(styles)(Tip);
