import React from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleOpenMenu } from "../../redux/menu/menu.actions";
import logo from "../../assets/images/header/logo.png";
import "./common-header.styles.scss";

const CommonHeader = ({ history, toggleOpenMenu }) => {
  return (
    <Row id="header" className="common-header" justify="center" align="middle">
      <Row justify="space-between" className="header-content">
        <Col className="col-1">
          <img
            className="logo"
            src={logo}
            alt="Logo"
            onClick={() => history.push("/")}
          ></img>
        </Col>
        <Col className="menu-container">
          <div className="burger-container" onClick={toggleOpenMenu}>
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

export default withRouter(connect(null, mapDispatchToProps)(CommonHeader));
