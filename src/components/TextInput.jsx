import React from "react";
import classes from "../styles/TextInput.module.css";

const TextInput = ({ type, placeholder, icon }) => {
  return (
    <div className={classes.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;
