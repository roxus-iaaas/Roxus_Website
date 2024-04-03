import React from 'react';
import { Row, Col } from 'antd';
import './home4.styles.scss';
import HorizontalLine from '../horizontal-line/horizontal-line.component';
import VerticalLine from '../vertical-line/vertical-line.component';
import GraButton from '../button/grabutton.component';
import BottomLine from '../bottom-line/bottom-line.component';

const HomeComp4 = ({ id }) => {
  return (
    <Row id={id} className="home4" justify="center" align="middle">
      <Row className="content width-100" gutter={[0, 48]}></Row>
      <HorizontalLine content={1} />
      <VerticalLine content={2} />

      <Row className="content1" gutter={[0, 24]}>
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
        <GraButton inverse={true}>Our Team</GraButton>
      </Row>
      <Row className="content2" gutter={[0, 24]}>
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
        <GraButton inverse={true}>About Roxus</GraButton>
      </Row>
      <BottomLine />
    </Row>
  );
};

export default HomeComp4;
