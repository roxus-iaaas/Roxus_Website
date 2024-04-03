import React from "react";
import { Row, Col } from "antd";
import ComplexStep from "../complex-step/complex-step.component";
import { aboutUsStep } from "../../constant/about-us";
// import BottomLine from "../bottom-line/bottom-line.component";

import "./about5.styles.scss";

const AboutUsComp5 = () => {
  return (
    <Row className="about-us-5" align="top">
      <Row justify="end" className="how-we-work">
        <Col span={24}>
          <span>Automation Journey</span>
        </Col>
      </Row>
      <ComplexStep steps={aboutUsStep} />
    </Row>
  );
};

export default AboutUsComp5;
