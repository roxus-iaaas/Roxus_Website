import React from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Row, Col } from "antd";
import GraButton from "../../components/button/grabutton.component";
import "./take-next-step.styles.scss";

const TakeNextStep = ({ toggleOpenContact }) => {
  return (
    <Row className="take-next-step" align="middle" justify="space-between">
      <Col className="text-container">
        <span>Take the next step toward digital automation</span>
      </Col>
      <Col>
        <GraButton handleClick={toggleOpenContact} inverse={true}>
          Get Started
        </GraButton>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenContact: () => dispatch(toggleOpenContact()),
});

export default connect(null, mapDispatchToProps)(TakeNextStep);
