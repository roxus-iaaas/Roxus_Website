import React from 'react';
import { Row } from 'antd';
import './m.about2.styles.scss';

const MobileAboutUsComp2 = () => {
  return (
    <Row className="mobile-about-2" justify="center">
      <Row className="content">
        <div className="track-record">
          <div>
            <span className="orange">
              Our proven
              <br />
            </span>
            <span>track record</span>
          </div>
        </div>
        <div className="statistics">
          <div className="details">
            <div className="margin-5vh">
              <span className="gradient color1">93%</span>
            </div>
            <div>
              <span className="text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </span>
            </div>
            <div className="margin-5vh">
              <span className="gradient color2">2X</span>
            </div>
            <div>
              <span className="text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </span>
            </div>
            <div className="margin-5vh">
              <span className="gradient color3">Half</span>
            </div>
            <div>
              <span className="text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </span>
            </div>
          </div>
        </div>
        {/* 
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
          </Row> */}
      </Row>
    </Row>
  );
};

export default MobileAboutUsComp2;
