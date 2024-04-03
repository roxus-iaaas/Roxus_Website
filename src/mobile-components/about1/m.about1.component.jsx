import React from "react";
import { Row, Col } from "antd";
import MobileCustomer2 from "../customer2/m.customer2.component";
import arrow from "../../assets/images/about/arrow.png";
import "./m.about1.styles.scss";

const MobileAboutUsComp1 = () => {
  return (
    <React.Fragment>
      <Row className="mobile-about-1" justify="center" align="middle">
        <Row className="content width-100">
          <Row>
            <Col className="intro">
              <div className="text">
                <span className="orange">
                  Who are Roxus
                  <br />{" "}
                </span>{" "}
                <span>and what can we do to help you?</span>
              </div>
              <img className="image-arrow" src={arrow} alt="Arrow" />
            </Col>
          </Row>
        </Row>
      </Row>
      <MobileCustomer2 />
    </React.Fragment>
  );
};

export default MobileAboutUsComp1;
