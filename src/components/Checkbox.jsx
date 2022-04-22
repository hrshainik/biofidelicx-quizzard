import React from "react";

const Checkbox = ({ text, className, id }) => {
  return (
    <label className={className} htmlFor={id}>
      <input type="checkbox" id={id} />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
