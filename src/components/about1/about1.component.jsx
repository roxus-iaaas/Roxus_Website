import React from "react";
import { Row, Col } from "antd";
import arrow from "../../assets/images/about/arrow.png";
import CustomerComp2 from "../../components/customer2/customer2.component";
import "./about1.styles.scss";

const AboutUsComp1 = () => {
  return (
    <Row className="about-us-1" justify="start" align="middle">
      <Row className="content">
        <Row>
          <Col className="intro">
            <div className="text">
              <span className="orange">Who are Roxus </span>
              <br />
              <span>and what can we do to help you?</span>
            </div>

            <img className="image-arrow" src={arrow} alt="Arrow" />
          </Col>
        </Row>
      </Row>
      <CustomerComp2 />
    </Row>
  );
};

export default AboutUsComp1;
