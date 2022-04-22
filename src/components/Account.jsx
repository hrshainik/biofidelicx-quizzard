import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

const Account = () => {
  const { currUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      {currUser ? (
        <>
          <span>{currUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={handleLogout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
