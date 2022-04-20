import React from "react";
import classes from "../styles/Button.module.css";

const Button = ({ text }) => {
  return (
    <button className={classes.button}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
