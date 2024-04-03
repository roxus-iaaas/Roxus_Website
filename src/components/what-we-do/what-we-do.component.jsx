import React from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Row, Col } from "antd";
import { homeContent2 } from "../../constant/contents";
import BorderText from "../border-text/border-text.component";
import GraButton from "../button/grabutton.component";
import checkImage from "../../assets/images/customers/check.png";
import { isMobileOnly } from "react-device-detect";
import MobileWhatWeDo from "../../mobile-components/what-we-do/m.what-we-do.component";
import "./what-we-do.styles.scss";

const WhatWeDo = ({ toggleOpenContact }) => {
  if (!isMobileOnly) {
    return (
      <Row className="what-we-do" justify="space-between" align="top">
        {homeContent2.map((content, index) => {
          const yellows = [1, 2];
          const noBorder = [1, 2];
          let colClass = "";
          let colRow = "";
          if (index % 2 === 0) {
            colClass = "even";
          } else {
            colClass = "odd";
          }
          if (index / 2 < 1) {
            colRow = "first";
          } else {
            colRow = "second";
          }
          if (index === 3) {
            content.index = 2;
          }
          return (
            <Col key={index} lg={12} className={`${colClass} ${colRow}`}>
              <BorderText
                content={content}
                yellow={yellows.includes(index)}
                noBorder={noBorder.includes(index)}
                direction={index === 3 ? "left" : "top"}
              />
            </Col>
          );
        })}
        <div className="book-meeting">
          <GraButton handleClick={toggleOpenContact} inverse={true}>
            Book A Meeting
          </GraButton>
        </div>
        <div className="image-check">
          <img src={checkImage} alt="Check"></img>
        </div>
      </Row>
    );
  } else {
    return <MobileWhatWeDo />;
  }
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenContact: () => dispatch(toggleOpenContact()),
});

export default connect(null, mapDispatchToProps)(WhatWeDo);
