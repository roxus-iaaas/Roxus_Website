import React from "react";
import { Row } from "antd";
import "./border-text.styles.scss";

const BorderText = ({
  content,
  yellow,
  right = false,
  direction = "top",
  noBorder = false,
}) => {
  return (
    <Row
      className={`border-text ${
        yellow ? "border-yellow" : "border-pink"
      } ${direction} ${noBorder ? "no-border" : ""}`}
    >
      <Row className={`border-content`}>
        <div className={`round-content ${right ? "right" : ""}`}>
          {content.index}
        </div>
        <div className="text">
          <div className="title">
            <span>{content.title}</span>
          </div>
          <div className="desc">
            <span>{content.desc}</span>
          </div>
        </div>
      </Row>
    </Row>
  );
};

export default BorderText;
