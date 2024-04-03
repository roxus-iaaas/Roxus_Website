import React from "react";
import "./grabutton.styles.scss";

const GraButton = ({ children, inverse = false, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={` ${inverse ? "button-gra-inv" : "button-gra"}`}
    >
      {children}
    </button>
  );
};

export default GraButton;
