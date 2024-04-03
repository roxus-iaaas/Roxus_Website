import React from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import { footerRoutes } from "../../constant/route";
import linkedin from "../../assets/images/common/linkedin.png";
import "./m.footer.styles.scss";

const MobileFooterComp = ({ history }) => {
  return (
    <div className="mobile-footer">
      <Row className="row-footer" align="middle" justify="space-between">
        {footerRoutes.map((footer, index) => {
          return (
            <Col span={12} key={index} className="link">
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
        <Col span={24} className="right-section">
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
        <Col span={24} className="company-name">
          <span>&copy; Roxus Limited 2020</span>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(MobileFooterComp);
