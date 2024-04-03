import React from "react";
import { Row, Col } from "antd";
import "./m.contact.styles.scss";
import HubspotForm from "react-hubspot-form";
import { addresses } from "../../constant/contact";

const MobileContact = ({ contentStyle = {}, id = "Contact" }) => {
  return (
    <React.Fragment>
      <Row id={id} className="mobile-contact">
        <Col span={24} className="content" style={contentStyle}>
          <div className="title">
            <span>
              Ready to start
              <br /> your automation journey?
            </span>
          </div>
          <div className="hubspot-form">
            <HubspotForm
              portalId="5453389"
              formId="042e3883-ef5c-4e00-9697-3b4a94f4260d"
            />
          </div>
        </Col>
      </Row>
      <Row className="find-us">
        <Col span={24} className="title">
          <span>Locations</span>
        </Col>

        {addresses.map((address, index) => {
          return (
            <Col xs={24} md={12} className="addresses">
              <div className="address" key={index}>
                <div className="country">
                  <span>{address.country}</span>
                </div>
                <div className="location">
                  <span>{address.location}</span>
                </div>
              </div>
            </Col>
          );
        })}
        <Col className="email">
          <div className="title">
            <span>Support</span>
          </div>
          <div className="support-content">
            <span>For support, please contact </span>
            <a href="mailto:help@roxus.io">help@roxus.io</a>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MobileContact;
