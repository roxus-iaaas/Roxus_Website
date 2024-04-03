import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Carousel, Row } from "antd";
import GraButton from "../../components/button/grabutton.component";
import leftArrowBorder from "../../assets/images/common/white-arrow-left-2.png";
import rightArrowBorder from "../../assets/images/common/white-arrow-right-2.png";
import leftArrowFilled from "../../assets/images/common/white-arrow-left-filled.png";
import rightArrowFilled from "../../assets/images/common/white-arrow-right-filled.png";
import { homeContent3 } from "../../constant/contents";
import "./m.home3.styles.scss";

const MobileHomeComp3 = ({ toggleOpenContact }) => {
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
          <Row key={index} className={`m-home3 ${content.background}`}>
            <div className="content">
              <div className="icon-arrow">
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
              </div>
              <div className="text-container">
                <div className="main-text">
                  <span>{content.mainText}</span>
                </div>
                <div className="sub-text">
                  <span>{content.subText}</span>
                </div>
              </div>
            </div>
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

export default connect(null, mapDispatchToProps)(MobileHomeComp3);
