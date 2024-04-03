import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { withRouter, useLocation } from "react-router-dom";
import logoDark from "../../assets/images/header/logo.png";
import logoWhite from "../../assets/images/header/logo-white.png";
import { connect } from "react-redux";
import { toggleOpenMenu } from "../../redux/menu/menu.actions";
import { headerType } from "../../constant/menu";
import "./header.styles.scss";

const Header = ({ isMobileOnly, toggleOpenMenu }) => {
  let location = useLocation();
  const brights = headerType[0];
  const [darkHeader, setDarkHeader] = useState(false);
  const [white, setWhite] = useState("");
  const [noDisplay, setNoDisplay] = useState("");

  useEffect(() => {
    if (!isMobileOnly) {
      setNoDisplay("no-display");
      if (brights.includes(location.hash)) {
        setTimeout(() => {
          setDarkHeader(false);
          setNoDisplay("");
        }, 1000);
      } else {
        setTimeout(() => {
          setDarkHeader(true);
          setNoDisplay("");
        }, 1000);
      }
    } else {
      setWhite("bg-white");
      setDarkHeader(true);
    }
  }, [location, brights, isMobileOnly]);

  return (
    <Row
      id="header"
      className={`header ${noDisplay} ${white}`}
      justify="center"
      align="middle"
    >
      <Row justify="space-between" className="header-content" align="middle">
        <Col className="col-1">
          <a href="#Home">
            <img
              className="logo"
              src={darkHeader ? logoDark : logoWhite}
              alt="Logo"
            ></img>
          </a>
        </Col>
        <Col className="menu-container">
          <div
            className={`burger-container ${darkHeader ? "" : "white"}`}
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

export default withRouter(connect(null, mapDispatchToProps)(Header));
