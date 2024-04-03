import React, { useState } from "react";
import "./executive.styles.scss";
import { Row, Col } from "antd";
import ExecutiveModal from "../executive-modal/executive-modal.component";
import { executives } from "../../constant/about-us";

const ExecutiveComp = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState({});

  return (
    <Row className="executive">
      <Row className="title">
        <span>Meet Our Executive Team</span>
      </Row>
      <Row className="members" justify="space-between" align="middle">
        {executives.map((executive, index) => {
          return (
            <Col
              lg={11}
              sm={24}
              md={24}
              className="member"
              key={index}
              onClick={() => {
                setVisible(true);
                setContent(executive);
              }}
            >
              <Row align="middle">
                <Col className="image" span={12}>
                  <img src={executive.bwImage} alt="Executive"></img>
                </Col>
                <Col className="description" span={12}>
                  <div className="name">
                    <span>{executive.name}</span>
                  </div>
                  <div className="occupation">
                    <span>{executive.occupation}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
      <ExecutiveModal
        visible={visible}
        content={content}
        handleCancel={() => setVisible(false)}
      />
    </Row>
  );
};

export default ExecutiveComp;
