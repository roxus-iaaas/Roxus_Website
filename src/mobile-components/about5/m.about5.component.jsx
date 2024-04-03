import React from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Row } from "antd";
import MobileComplexStep from "../../mobile-components/complex-step/m.comple-step.component";
import BottomLine from "../../components/bottom-line/bottom-line.component";
import "./m.about5.styles.scss";
import GraButton from "../../components/button/grabutton.component";

const MobileAboutComp5 = ({ toggleOpenContact }) => {
  return (
    <Row className="mobile-about-5">
      <Row className="title">
        <span>Automation Journey</span>
      </Row>
      <Row className="process">
        <MobileComplexStep />
      </Row>
      <div className="button">
        <GraButton handleClick={toggleOpenContact} inverse={true}>
          Get Started
        </GraButton>
      </div>
      <BottomLine />
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenContact: () => dispatch(toggleOpenContact()),
});

export default connect(null, mapDispatchToProps)(MobileAboutComp5);
