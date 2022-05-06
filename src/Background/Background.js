import React from "react";
import classes from "./Background.module.css";

const Background = (props) => {
  return (
    <div style={props.transparency?{overflow: 'auto'}:{overflow: 'hidden'} } className={classes["colors"]}>
      {props.transparency ? (
        <React.Fragment />
      ) : (
        <React.Fragment>
          <div className={classes["stars"]}></div>
          <div className={classes["stars2"]}></div>
          <div className={classes["stars3"]}></div>
        </React.Fragment>
      )}

      {props.children}
    </div>
  );
};

export default Background;
