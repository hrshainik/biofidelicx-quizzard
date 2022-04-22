import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox text="A new hope 1" className={classes.answer} id="option1" />
      <Checkbox text="A new hope 1" className={classes.answer} id="option2" />
      <Checkbox
        text="A new hope 1"
        className={`${classes.answer} ${classes.wrong}`}
        id="option3"
      />
      <Checkbox
        text="A new hope 1"
        className={`${classes.answer} ${classes.correct}`}
        id="option4"
      />
      <Checkbox text="A new hope 1" className={classes.answer} id="option5" />
      <Checkbox text="A new hope 1" className={classes.answer} id="option6" />
      <Checkbox text="A new hope 1" className={classes.answer} id="option7" />
      <Checkbox text="A new hope 1" className={classes.answer} id="option8" />
      <Checkbox text="A new hope 1" className={classes.answer} id="option9" />
      <Checkbox text="A new hope 1" className={classes.answer} id="option10" />
    </div>
  );
};

export default Answers;
