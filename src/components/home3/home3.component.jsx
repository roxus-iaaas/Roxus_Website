import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import leftArrowBorder from "../../assets/images/common/white-arrow-left-2.png";
import rightArrowBorder from "../../assets/images/common/white-arrow-right-2.png";
import leftArrowFilled from "../../assets/images/common/white-arrow-left-filled.png";
import rightArrowFilled from "../../assets/images/common/white-arrow-right-filled.png";
import { Carousel, Row, Col } from "antd";
import { isMobile } from "react-device-detect";
import GraButton from "../button/grabutton.component";
import { homeContent3 } from "../../constant/contents";
import "./home3.styles.scss";

const HomeComp3 = ({ id, toggleOpenContact }) => {
  const [leftArrow, setLeftArrow] = useState(leftArrowBorder);
  const [rightArrow, setRightArrow] = useState(rightArrowBorder);

  const ref = useRef({});

  const next = () => {
    ref.current.next();
  };

  const prev = () => {
    ref.current.prev();
  };
  return (
    <Carousel
      id={id}
      ref={ref}
      effect="fade"
      autoplay={true}
      autoplaySpeed={10000}
      speed={1000}
      pauseOnHover={false}
      pauseOnFocus={false}
      pauseOnDotsHover={false}
      dots={false}
    >
      {homeContent3.map((content, index) => {
        return (
          <Row
            key={index}
            className={`home3 ${content.background}`}
            justify="center"
            align="top"
          >
            <Row className="first-content">
              <Col className="arrow-container">
                {isMobile ? (
                  <img
                    onTouchStart={() => {
                      setLeftArrow(leftArrowFilled);
                    }}
                    onTouchEnd={() => {
                      setTimeout(() => {
                        setLeftArrow(leftArrowBorder);
                      }, 500);
                    }}
                    src={leftArrow}
                    alt="Arrow"
                    className="left-arrow"
                    onClick={prev}
                  ></img>
                ) : (
                  <img
                    onMouseEnter={() => {
                      setLeftArrow(leftArrowFilled);
                    }}
                    onMouseLeave={() => {
                      setLeftArrow(leftArrowBorder);
                    }}
                    src={leftArrow}
                    alt="Arrow"
                    className="left-arrow"
                    onClick={prev}
                  ></img>
                )}

                {isMobile ? (
                  <img
                    onTouchStart={() => {
                      setRightArrow(rightArrowFilled);
                    }}
                    onTouchEnd={() => {
                      setTimeout(() => {
                        setRightArrow(rightArrowBorder);
                      }, 500);
                    }}
                    src={rightArrow}
                    alt="Arrow"
                    className="right-arrow"
                    onClick={next}
                  ></img>
                ) : (
                  <img
                    onMouseEnter={() => {
                      setRightArrow(rightArrowFilled);
                    }}
                    onMouseLeave={() => {
                      setRightArrow(rightArrowBorder);
                    }}
                    src={rightArrow}
                    alt="Arrow"
                    className="right-arrow"
                    onClick={next}
                  ></img>
                )}
              </Col>
              <Col span={18} xs={20} className="line">
                <Row className="line-container">
                  <Col span={18} xs={20}>
                    {content.mainText}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              className="second-content"
              justify="space-between"
              align="bottom"
            >
              <Col lg={14} xs={18}>
                {content.subText}
              </Col>
            </Row>
            <div className="button-container">
              <GraButton handleClick={toggleOpenContact}>
                {content.buttonText}
              </GraButton>
            </div>
          </Row>
        );
      })}
    </Carousel>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenContact: () => dispatch(toggleOpenContact()),
});

export default connect(null, mapDispatchToProps)(HomeComp3);
