import React, { useState } from "react";
import { Row } from "antd";
import "./read-more-paragraph.styles.scss";

const ReadMoreParagraph = ({ content, yellow = true, direction = "left" }) => {
  const [readMore, setReadMore] = useState(false);

  const hideFullText = () => {
    setReadMore(false);
    const element = document.getElementById(content.id);
    element.scrollIntoView();
  };

  return (
    <Row
      className={`read-more ${
        yellow ? "border-yellow" : "border-pink"
      } ${direction}`}
    >
      <Row className="border-content" id={content.id}>
        <div className="round-content">{content.index}</div>
        <div className="text">
          <div className="title">
            <span>{content.title}</span>
          </div>
          {!readMore && (
            <div className="mainDesc">
              <span>{content.mainDesc}</span>
              <span
                className="read-more-text"
                onClick={() => setReadMore(true)}
              >
                &nbsp;READ MORE...
              </span>
            </div>
          )}
          {readMore && (
            <div className="fullDesc">
              <span>{content.fullDesc}</span>
              <span className="read-more-text" onClick={hideFullText}>
                &nbsp;HIDE...
              </span>
            </div>
          )}
        </div>
      </Row>
    </Row>
  );
};

export default ReadMoreParagraph;
