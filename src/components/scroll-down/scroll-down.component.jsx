import React, { useState } from "react";
import arrowDownBorder from "../../assets/images/common/white-arrow-down.png";
import arrowDownFilled from "../../assets/images/common/white-arrow-down-filled.png";
import "./scroll-down.styles.scss";

const ScrollDown = ({ handleClick }) => {
  const [arrowDown, setArrowDown] = useState(arrowDownBorder);

  return (
    <div
      className="scroll-down"
      onClick={handleClick}
      onMouseEnter={() => setArrowDown(arrowDownFilled)}
      onMouseLeave={() => {
        setArrowDown(arrowDownBorder);
      }}
    >
      <div className="text">[Scroll to explore]</div>
      <div className="arrow-down">
        <img src={arrowDown} alt="Arrow Down" />
      </div>
    </div>
  );
};

export default ScrollDown;
