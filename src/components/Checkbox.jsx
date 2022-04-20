import React from "react";

const Checkbox = ({ text }) => {
  return (
    <label>
      <input type="checkbox" />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
