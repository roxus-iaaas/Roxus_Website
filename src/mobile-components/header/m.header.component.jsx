import React from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleOpenMenu } from "../../redux/menu/menu.actions";
import logoWhite from "../../assets/images/header/logo-white.png";
import logoDark from "../../assets/images/header/logo.png";
import "./m.header.styles.scss";

const MobileHeader = ({ isTransparent = false, history, toggleOpenMenu }) => {
  return (
    <Row
      className={`m-header ${isTransparent ? "transparent" : ""}`}
      justify="center"
      align="middle"
    >
      <Row justify="space-between" className="header-content">
        <Col className="col-1">
          <img
            className="logo"
            src={isTransparent ? logoWhite : logoDark}
            alt="Logo"
            height="25"
            onClick={() => history.push("/")}
          ></img>
        </Col>
        <Col>
          <div
            className={`burger-container ${isTransparent ? "white" : ""}`}
            onClick={toggleOpenMenu}
          >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Col>
      </Row>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenMenu: () => dispatch(toggleOpenMenu()),
});

export default withRouter(connect(null, mapDispatchToProps)(MobileHeader));
