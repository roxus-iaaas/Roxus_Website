import React, { Fragment } from "react";

import "./step-desc.styles.scss";

const StepDesc = ({ steps }) => {
  return (
    <Fragment>
      {steps.map((step, index) => {
        let factor = 13;
        let isUp = false;
        if (index % 2 === 0) {
          isUp = true;
        }
        let lineStyle = {};
        let contentStyle = {};
        if (isUp) {
          lineStyle = {
            left: `calc(25px + ${index * factor}vw )`,
          };
          contentStyle = {
            left: `calc(${index * factor}vw)`,
          };
        } else {
          lineStyle = {
            left: `calc(25px + ${index * factor}vw)`,
          };
          contentStyle = {
            left: `calc(-15vw + 50px + ${index * factor}vw)`,
          };
        }

        let roundStyle = {
          left: `calc(${index * factor}vw)`,
        };

        return (
          <div key={index} className="step-desc">
            <div className="round-step" style={roundStyle}>
              <span>{index + 1}</span>
            </div>
            <div className={`step ${isUp ? "up" : "down"}`}>
              <div className="vertical-line" style={lineStyle} />
              <div className="step-content" style={contentStyle}>
                <div className="title">
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
    </Fragment>
  );
};

export default StepDesc;
