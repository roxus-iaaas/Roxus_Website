import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Carousel, Row, Col } from "antd";
import speechImage from "../../assets/images/solutions/speech.png";
import { testimonials } from "../../constant/testimonials";
import leftArrowBorder from "../../assets/images/common/white-arrow-left-2.png";
import rightArrowBorder from "../../assets/images/common/white-arrow-right-2.png";
import leftArrowFilled from "../../assets/images/common/white-arrow-left-filled.png";
import rightArrowFilled from "../../assets/images/common/white-arrow-right-filled.png";
import { isMobile } from "react-device-detect";
import GraButton from "../../components/button/grabutton.component";
import { isMobileOnly } from "react-device-detect";
import "./solution4.styles.scss";

const SolutionComp4 = ({ toggleOpenContact }) => {
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
    <div className="carousel-container">
      <Carousel
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
        {testimonials.map((testimonial, index) => {
          let backgroundClass = "background" + (index + 1);
          return (
            <Row key={index} className={`solution-4 ${backgroundClass}`}>
              <Row className="testimonial-content" justify="space-between">
                <Col lg={24} xs={24} className="image-speech">
                  <img src={speechImage} alt="Quote" />
                </Col>
                <Col lg={24} xs={24}>
                  <div className="testimonial">
                    <span>{testimonial.text}</span>
                  </div>
                  <div className="name">
                    <span>{testimonial.person}</span>
                  </div>
                </Col>
              </Row>
              <div className="button-container">
                <GraButton handleClick={toggleOpenContact}>
                  Get Started
                </GraButton>
              </div>
              {!isMobileOnly && (
                <div className="icon-arrow">
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
                </div>
              )}
            </Row>
          );
        })}
      </Carousel>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenContact: () => dispatch(toggleOpenContact()),
});

export default connect(null, mapDispatchToProps)(SolutionComp4);
