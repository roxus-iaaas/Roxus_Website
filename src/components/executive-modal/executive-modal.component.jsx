import React from "react";
import { Modal, Row, Col } from "antd";
import "./executive-modal.styles.scss";

const ExecutiveModal = ({ visible = true, handleCancel, content }) => {
  return (
    <Modal
      centered
      visible={visible}
      className="executive-modal"
      footer={null}
      onCancel={handleCancel}
      destroyOnClose={true}
    >
      <Row justify="center">
        <Col sm={22} lg={7} xl={7}>
          <img
            className="executive-img"
            src={content.colorImage}
            alt="Executive"
          ></img>
        </Col>
        <Col sm={22} lg={16} xl={16}>
          <div className="name">
            <span>{content.name}</span>
          </div>
          {/* <div className="occupation">
            <span>{content.occupation}</span>
          </div> */}
          <div className="long-desc">
            {content.longDesc ? (
              content.longDesc
            ) : (
              <React.Fragment>
                <p>
                  Ed Abbo is President and Chief Technology Officer at C3.ai,
                  which provides an AI and IoT software platform-as-a-service to
                  power enterprise digital transformations. Mr. Abbo leads
                  C3.ai’s strategy and execution, including technology
                  direction, innovation, and customer success.
                </p>
                <p>
                  Prior to C3.ai, Mr. Abbo was Senior Vice President at Oracle
                  Corporation, where he was responsible for its application
                  products. Prior to joining Oracle in 2006, he was Senior Vice
                  President of Engineering and Chief Technology Officer for
                  Siebel Systems.
                </p>
                <p>
                  Mr. Abbo earned a Master of Science in Mechanical Engineering
                  from the Massachusetts Institute of Technology and a Bachelor
                  of Science in Mechanical & Aerospace Engineering from
                  Princeton University.
                </p>
              </React.Fragment>
            )}
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default ExecutiveModal;
