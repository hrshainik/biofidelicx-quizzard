import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo3.svg";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="biofidelicX academy logo" />
            {/* <h3>biofidelicX academy</h3> */}
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
