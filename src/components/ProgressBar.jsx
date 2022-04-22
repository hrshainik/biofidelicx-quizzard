import React from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "40%" }}></div>
        </div>
      </div>
      <a href="result.html">
        {/* <button className={`${classes.next} button`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </button> */}
        <Button className={classes.nextButton}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
};

export default ProgressBar;
