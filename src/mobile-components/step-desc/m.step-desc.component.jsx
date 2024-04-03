import React from "react";

import "./m.step-desc.styles.scss";

const MobileStepDesc = ({ steps }) => {
  const processHeight = 80;
  let distance = processHeight / (steps.length - 1);

  return (
    <div>
      {steps.map((step, index) => {
        let isRight = false;
        if (index % 2 === 0) {
          isRight = true;
        }
        let lineStyle = {};
        let contentStyle = {};
        lineStyle = {
          top: `calc(3vh + ${index * distance}vh)`,
        };
        contentStyle = {
          top: `calc(2vh + ${index * distance}vh)`,
        };

        let roundStyle = {
          top: `calc(${index * distance}vh)`,
        };

        return (
          <div key={index} className="mobile-step-desc">
            <div className="round-step" style={roundStyle}>
              <span>{index + 1}</span>
            </div>
            <div className={`step ${isRight ? "right" : "left"}`}>
              <div className="vertical-line" style={lineStyle} />
              <div className="step-content" style={contentStyle}>
                <div className="m-title">
                  <span>{step.title}</span>
                </div>
                <div className="description">
                  <span>{step.description}</span>
                </div>
              </div>
            </div>
            <div className="vertical-line" />
          </div>
        );
      })}
    </div>
  );
};

export default MobileStepDesc;
