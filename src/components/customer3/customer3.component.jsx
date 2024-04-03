import React from 'react';
import { Row } from 'antd';
import BottomLine from '../bottom-line/bottom-line.component';
import './customer3.styles.scss';

const CustomerComp3 = () => {
  return (
    <Row className="customer-3" justify="center">
      <div className="percent">
        <span>53%</span>
      </div>
      <div className="text">
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </span>
      </div>
      <BottomLine />
    </Row>
  );
};

export default CustomerComp3;
