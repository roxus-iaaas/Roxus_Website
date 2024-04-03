import React from "react";
import { Row, Col } from "antd";
import GraButton from "../button/grabutton.component";

import "./home2.styles.scss";

const HomeComp2 = ({ id }) => {
  return (
    <Row id={id} className="home2" justify="center" align="middle">
      <Row className="content ml-40vw" justify="start" gutter={[0, 24]}>
        <Col className="title">
          <span>Lorem ipsum dolor sit amet consectetur</span>
        </Col>
        <Col className="text">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </Col>
        <Col>
          <GraButton inverse={true}>Case Studies</GraButton>
        </Col>
      </Row>
    </Row>
  );
};

export default HomeComp2;
