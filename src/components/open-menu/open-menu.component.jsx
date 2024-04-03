import React from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleOpenMenu } from "../../redux/menu/menu.actions";
import logo from "../../assets/images/header/logo-white.png";
import "./open-menu.styles.scss";
import { routes } from "../../constant/route";

const OpenMenu = ({ history, toggleOpenMenu }) => {
  const activeLocation = history.location.pathname;
  return (
    <Row className="openmenu" justify="center" align="top">
      <Row justify="space-between" className="openmenu-content">
        <Col>
          <img className="logo" src={logo} alt="Logo" height="25"></img>
        </Col>
        <Col>
          <span className="close" onClick={toggleOpenMenu}>
            &#10005;
          </span>
        </Col>
      </Row>
      <Row justify="space-between" className="menu">
        {routes.map((route, index) => {
          return (
            <Col
              key={index}
              className={`menu-item ${
                activeLocation === route.url ? "active" : ""
              }`}
            >
              <span
                onClick={() => {
                  const lastIndex = window.location.href.lastIndexOf("/");
                  window.location.href =
                    window.location.href.substr(0, lastIndex) + route.url;
                  toggleOpenMenu();
                }}
              >
                {route.title}
              </span>
            </Col>
          );
        })}
      </Row>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenMenu: () => dispatch(toggleOpenMenu()),
});

export default withRouter(connect(null, mapDispatchToProps)(OpenMenu));
