import React from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import { footerRoutes } from "../../constant/route";
import linkedin from "../../assets/images/common/linkedin.png";
import "./footer.styles.scss";

const FooterComponent = ({ isBottom, history }) => {
  return (
    <div className={`footer ${isBottom ? "bottom" : ""}`}>
      <Row className="row-footer" align="middle" justify="space-between">
        <Col span={16} className="left-section">
          <Row align="middle" justify="start">
            {footerRoutes.map((footer, index) => {
              return (
                <Col key={index} offset={footer.offset} className="link">
                  <span
                    onClick={() => {
                      if (!footer.external) {
                        history.push(footer.url);
                      } else {
                        window.open(footer.url);
                      }
                    }}
                  >
                    {footer.title}
                  </span>
                </Col>
              );
            })}
          </Row>
          <div className="company-name">
            <span>&copy; Roxus Limited 2020</span>
          </div>
        </Col>
        <Col className="right-section">
          <div>
            <img
              src={linkedin}
              className="linkedin"
              alt="Linkedin"
              onClick={() => {
                window.open("https://www.linkedin.com/company/roxus/");
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(FooterComponent);
