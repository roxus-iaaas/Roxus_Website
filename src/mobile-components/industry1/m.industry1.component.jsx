import React from 'react';
import { Row } from 'antd';
import './m.industry1.styles.scss';

const MobileIndustryComp1 = () => {
  return (
    <Row className="mobile-industry-1" align="top">
      <Row className="content">
        <div className="left-content">
          <div className="title">
            <span>Real estate</span>
          </div>
        </div>
        <div className="right-content">
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
        </div>
      </Row>
    </Row>
  );
};

export default MobileIndustryComp1;
