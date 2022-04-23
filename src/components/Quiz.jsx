import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Video.module.css";

const Quiz = ({ title, noq, id }) => {
  return (
    <Link to={`/quiz/${id}`}>
      <div className={classes.video}>
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
        />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total: {noq * 5}</p>
        </div>
      </div>
    </Link>
  );
};

export default Quiz;
