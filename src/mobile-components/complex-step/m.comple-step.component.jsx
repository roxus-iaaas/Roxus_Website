import React from "react";

import MobileStepDesc from "../step-desc/m.step-desc.component";
import { mobileAboutUsStep } from "../../constant/about-us";
import "./m.complex-step.styles.scss";

const MobileComplexStep = () => {
  return (
    <div className="mobile-complex-step">
      <div className="line">
        <div className="round-content" />
        <MobileStepDesc steps={mobileAboutUsStep} />
      </div>
    </div>
  );
};

export default MobileComplexStep;
