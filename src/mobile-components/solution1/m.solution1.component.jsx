import React from 'react';
import { Row, Col } from 'antd';
import arrow from '../../assets/images/customers/question-mark.png';
import './m.solution1.styles.scss';

const MobileSolutionComp1 = () => {
  return (
    <div className="mobile-solution-1">
      <Row className="content width-100">
        <Row>
          <Col className="intro">
            <div className="text">
              <span className="orange">
                How do
                <br /> we improve
                <br />
              </span>{' '}
              <span>the efficiency of wait time for diagnostics</span>
            </div>

            <img className="image-arrow" src={arrow} alt="Arrow" />
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default MobileSolutionComp1;
