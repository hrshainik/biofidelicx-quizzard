import React from "react";
import classes from "../styles/Form.module.css";

const Form = ({ children, className }) => {
  return (
    <form className={`${className} ${classes.form}`} action="#">
      {children}
    </form>
  );
};

export default Form;
