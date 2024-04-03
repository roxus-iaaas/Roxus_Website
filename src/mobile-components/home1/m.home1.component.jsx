import React from "react";
import { Row } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectGreenScreenActive } from "../../redux/green-screen/green-screen.selectors";
import GraButton from "../../components/button/grabutton.component";
import leftArrow from "../../assets/images/common/white-arrow-left-2.png";
import rightArrow from "../../assets/images/common/white-arrow-right-2.png";
import whiteCloud from "../../assets/images/common/cloud.gif";
import "./m.home1.styles.scss";

const MobileHomeComp1 = ({ isGreenScreen }) => {
  const aosDelay = isGreenScreen ? 10000 : 0;
  const aosDuration = isGreenScreen ? 2000 : 0;
  return (
    <Row className="m-home1">
      <div
        className="content"
        data-aos="fade-right"
        data-aos-duration={aosDuration}
        data-aos-delay={aosDelay}
      >
        <div className="icon-arrow">
          <img src={leftArrow} alt="Arrow" className="left-arrow"></img>
          <img src={rightArrow} alt="Arrow" className="right-arrow"></img>
        </div>
        <div className="text-container">
          <div className="main-text">
            <span>Digital transformation.</span>
          </div>
          <div className="sub-text">
            <p>Our digital workforce will save you time and money.</p>
            <p>Helping you grow and improve your customers experience.</p>
          </div>
        </div>
      </div>
      <div
        className="button-container"
        data-aos="fade-left"
        data-aos-duration={aosDuration}
        data-aos-delay={aosDelay}
      >
        <GraButton
          handleClick={() => {
            document.getElementById("WhyRoxus").scrollIntoView();
          }}
        >
          Learn More
        </GraButton>
      </div>
      <div
        className="cloud-container"
        data-aos="zoom-in"
        data-aos-duration={aosDuration}
        data-aos-delay={aosDelay}
      >
        <img src={whiteCloud} alt="Cloud" />
      </div>
    </Row>
  );
};

const mapStatesToProps = createStructuredSelector({
  isGreenScreen: selectGreenScreenActive,
});

export default connect(mapStatesToProps)(MobileHomeComp1);
