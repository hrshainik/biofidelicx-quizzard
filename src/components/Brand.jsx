import React from "react";
import classes from "../styles/Brand.module.css";

const Brand = () => {
  return (
    <ul>
      <li>
        <a href="index.html" className={classes.brand}>
          <img src="./images/logo-bg.png" alt="Learn with Sumit Logo" />
          <h3>Learn with Sumit</h3>
        </a>
      </li>
    </ul>
  );
};

export default Brand;
