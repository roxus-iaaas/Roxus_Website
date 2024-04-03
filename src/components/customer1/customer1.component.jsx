import React from 'react';

import { Row, Col } from 'antd';
import './customer1.styles.scss';

const CustomerComp1 = () => {
  return (
    <Row className="customer-1">
      <Row className="content">
        <Col span={11} className="left-content">
          <div className="small-text">
            <span>Our customers</span>
          </div>
          <div className="large-text">
            <span>Lorem ipsum dolar sit emit</span>
          </div>
        </Col>
        <Col offset={2} span={11} className="right-content">
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </span>
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default CustomerComp1;
