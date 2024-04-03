import React from "react";

import StepDesc from "../step-desc/step-desc.component";
import "./complex-step.styles.scss";

const ComplexStep = ({ steps }) => {
  return (
    <div className="complex-step">
      <div className="line"></div>
      <StepDesc steps={steps} />
    </div>
  );
};

export default ComplexStep;
