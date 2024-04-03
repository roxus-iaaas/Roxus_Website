import React from 'react';
import { Row } from 'antd';
import './m.customer1.styles.scss';

const MobileCustomerComp1 = () => {
  return (
    <Row className="mobile-customer-1" align="top">
      <Row className="content">
        <div className="left-content">
          <div>
            <span>Our customers</span>
          </div>
          <div className="title">
            <span>Lorem ipsum dolar sit emit</span>
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

export default MobileCustomerComp1;
