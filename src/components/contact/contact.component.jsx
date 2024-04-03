import React from "react";
import { Row, Col } from "antd";
import "./contact.styles.scss";
import HubspotForm from "react-hubspot-form";
import { addresses } from "../../constant/contact";

const Contact = ({ contentStyle = {}, id = "Contact" }) => {
  return (
    <Row id={id} className="contact" justify="space-between">
      <Col sm={24} md={24} lg={16} className="content" style={contentStyle}>
        <div className="title">
          <span>
            Ready to start your
            <br /> automation journey?
          </span>
        </div>
        <div className="hubspot-form">
          <HubspotForm
            portalId="5453389"
            formId="042e3883-ef5c-4e00-9697-3b4a94f4260d"
          />
        </div>
      </Col>
      <Col sm={24} md={24} lg={{ span: 6, offset: 2 }} className="find-us">
        <div className="title">
          <span>Locations</span>
        </div>
        <div className="addresses">
          {addresses.map((address, index) => {
            return (
              <div className="address" key={index}>
                <div className="country">
                  <span>{address.country}</span>
                </div>
                <div className="location">
                  <span>{address.location}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="email">
          <div className="title">
            <span>Support</span>
          </div>
          <div className="support-content">
            <span>For support, please contact </span>
            <a href="mailto:help@roxus.io">help@roxus.io</a>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;
