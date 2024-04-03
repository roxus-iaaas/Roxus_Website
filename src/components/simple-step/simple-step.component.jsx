import React from 'react';
import './simple-step.styles.scss';

const SimpleStep = ({
  lineStyle = { top: '20vh', width: '65vw', right: 0 },
  contentStyle = { top: 'calc(20vh - 20px)' },
  contentLeft = '35vw',
  initialMargin = 55,
  stepContents,
  activeIndex = 0,
}) => {
  return (
    <div className="simple-step">
      <div className="line" style={lineStyle}></div>
      {stepContents &&
        stepContents.length >= 0 &&
        stepContents.map((step, index) => {
          return (
            <div
              key={index}
              style={{
                ...contentStyle,
                left: `calc(${contentLeft} + ${initialMargin * index}px)`,
              }}
              className={`round-content ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <span>{step}</span>
            </div>
          );
        })}
    </div>
  );
};

export default SimpleStep;
