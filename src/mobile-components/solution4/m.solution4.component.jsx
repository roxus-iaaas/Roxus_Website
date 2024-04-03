import React from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Row } from "antd";
import GraButton from "../../components/button/grabutton.component";
import speech from "../../assets/images/solutions/speech.png";
import { testimonials } from "../../constant/testimonials";
import { Carousel } from "antd";
import "./m.solution4.styles.scss";

const MobileSolutionComp4 = ({ toggleOpenContact }) => {
  return (
    <div className="mobile-carousel-container">
      <Carousel
        effect="fade"
        autoplay={true}
        autoplaySpeed={10000}
        pauseOnHover={false}
        pauseOnFocus={false}
        pauseOnDotsHover={false}
        dots={false}
      >
        {testimonials.map((testimonial, index) => {
          let backgroundClass = "background" + (index + 1);
          return (
            <Row
              key={index}
              className={`mobile-solution-4 ${backgroundClass}`}
              align="middle"
              justify="center"
            >
              <div className="speech">
                <img src={speech} alt="Speech" />
              </div>
              <div className="description">
                <span>{testimonial.text}</span>
              </div>
              <div className="name">
                <span>{testimonial.person}</span>
              </div>
              <div className="button-container">
                <GraButton handleClick={toggleOpenContact}>
                  Get Started
                </GraButton>
              </div>
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

export default connect(null, mapDispatchToProps)(MobileSolutionComp4);
