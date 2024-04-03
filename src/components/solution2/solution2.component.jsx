import React from 'react';
import { Row, Col } from 'antd';
import './solution2.styles.scss';

const SolutionComp2 = () => {
  return (
    <Row className="solution-2">
      <Row className="title">
        <Col>
          <span>Our solution</span>
        </Col>
      </Row>
      <Row className="solutions" justify="space-between" align="middle">
        <Col span={9}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </Col>
        <Col span={9}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </Col>
      </Row>
    </Row>
  );
};

export default SolutionComp2;
