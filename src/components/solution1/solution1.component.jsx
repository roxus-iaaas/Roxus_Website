import React from 'react';
import { Row, Col } from 'antd';
import questionMark from '../../assets/images/customers/question-mark.png';
import './solution1.styles.scss';

const SolutionComp1 = () => {
  return (
    <Row className="solution-1" justify="center" align="middle">
      <Row className="content width-100">
        <Col className="intro">
          <div className="text">
            <span className="orange">How do we improve</span>
            <br />
            <span>the efficiency of wait time for diagnostics?</span>
          </div>

          <img className="image-question" src={questionMark} alt="Arrow" />
        </Col>
      </Row>
    </Row>
  );
};

export default SolutionComp1;
