import React from "react";
import successImage from "../assets/img/success.png";
import classes from "../styles/Summery.module.css";

const Summery = () => {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        {/* progress bar will be placed here */}
        <p className={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={classes.badge}>
        <img src={successImage} alt="Success" />
      </div>
    </div>
  );
};

export default Summery;
