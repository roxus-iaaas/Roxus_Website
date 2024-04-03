import React from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Row, Col, Modal } from "antd";
import HubspotForm from "react-hubspot-form";
import "./contact-modal.styles.scss";

const ContactModal = ({ visible, toggleOpenContact }) => {
  return (
    <Modal
      style={{ top: 0, bottom: 0, minWidth: "100vw", minHeight: "100vh" }}
      visible={visible}
      footer={null}
      centered
      mask={false}
      className="contact-container"
      onCancel={toggleOpenContact}
    >
      <Row className="contact-modal" justify="center" align="top">
        <Col span={24} className="text">
          <span>Are you ready to start your journey with us?</span>
        </Col>
        <Col span={24}>
          <HubspotForm
            portalId="5453389"
            formId="90791f5d-5e81-454d-96f2-32f0140755b1"
          />
        </Col>
      </Row>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenContact: () => dispatch(toggleOpenContact()),
});

export default connect(null, mapDispatchToProps)(ContactModal);
