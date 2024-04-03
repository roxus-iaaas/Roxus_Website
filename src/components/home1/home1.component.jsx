import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectGreenScreenActive } from "../../redux/green-screen/green-screen.selectors";
import leftArrow from "../../assets/images/common/white-arrow-left-2.png";
import rightArrow from "../../assets/images/common/white-arrow-right-2.png";
import whiteCloud from "../../assets/images/common/cloud.gif";
import GraButton from "../button/grabutton.component";
import ScrollDown from "../../components/scroll-down/scroll-down.component";
import { isMobileOnly } from "react-device-detect";

import "./home1.styles.scss";

const HomeComp1 = ({ isGreenScreen, id }) => {
  const aosDelay = isGreenScreen ? 10000 : 0;
  const aosDuration = isGreenScreen ? 2000 : 0;

  return (
    <Row id={id} className="home1" justify="center" align="top">
      <Row
        className="first-content"
        data-aos="fade-right"
        data-aos-duration={aosDuration}
        data-aos-delay={aosDelay}
      >
        <Col className="arrow-container">
          <img src={leftArrow} alt="Arrow" className="left-arrow"></img>
          <img src={rightArrow} alt="Arrow" className="right-arrow"></img>
        </Col>
        <Col xl={16} xs={16} className="line">
          <Row className="line-container">
            <Col xl={18} xs={16}>
              <span>Digital transformation.</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        className="second-content"
        align="top"
        data-aos="fade-right"
        data-aos-duration={aosDuration}
        data-aos-delay={aosDelay}
      >
        <Col xl={10} xs={14}>
          <p>Our digital workforce will save you time and money.</p>
          <p>Helping you grow and improve your customers experience.</p>
        </Col>
      </Row>
      <div
        className="button-container"
        data-aos="fade-left"
        data-aos-duration={aosDuration}
        data-aos-delay={aosDelay}
      >
        <a href="#WhyRoxus">
          <GraButton>Learn More</GraButton>
        </a>
      </div>
      <div
        className="cloud-container"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay={aosDelay}
      >
        <img src={whiteCloud} alt="Cloud" />
      </div>
      {!isMobileOnly && <ScrollDown />}
    </Row>
  );
};

const mapStatesToProps = createStructuredSelector({
  isGreenScreen: selectGreenScreenActive,
});

export default connect(mapStatesToProps)(HomeComp1);
