import React from 'react';
import { Row, Col } from 'antd';
import './about2.styles.scss';

const AboutUsComp2 = () => {
  return (
    <Row className="about-us-2" justify="center" align="middle">
      <Row className="content width-100">
        <Row className="track-record" justify="end">
          <Col className="text">
            <span className="orange">
              Our proven
              <br />
            </span>
            <span>track record</span>
          </Col>
        </Row>
        <Row className="statistics">
          <Row className="details" justify="space-between" align="middle">
            <Col span={7}>
              <div>
                <span className="gradient color1">93%</span>
              </div>
              <div>
                <span className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </span>
              </div>
            </Col>
            <Col span={7}>
              <div>
                <span className="gradient color2">2X</span>
              </div>
              <div>
                <span className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </span>
              </div>
            </Col>
            <Col span={7}>
              <div>
                <span className="gradient color3">Half</span>
              </div>
              <div>
                <span className="text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </span>
              </div>
            </Col>
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export default AboutUsComp2;
