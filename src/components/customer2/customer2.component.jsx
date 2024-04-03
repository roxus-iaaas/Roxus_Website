import React from "react";
import { Row } from "antd";
import questionMark from "../../assets/images/customers/question-mark.png";
import check from "../../assets/images/customers/check.png";
import { contentCustomer2 } from "../../constant/customer";
import "./customer2.styles.scss";

const CustomerComp2 = () => {
  return (
    <Row className="customer-2">
      {contentCustomer2.map((content, index) => {
        let borderStyle = "";
        if (index % 2 === 0) {
          borderStyle = "border-yellow";
        } else {
          borderStyle = "border-pink";
        }
        return (
          <Row key={index} className={`cus2-content ${borderStyle}`}>
            {index === 0 && (
              <div className="question-mark">
                <img src={questionMark} alt="Question mark"></img>
              </div>
            )}
            {index === 2 && (
              <div className="check">
                <img src={check} alt="Check"></img>
              </div>
            )}
            <div className="round-content">{index + 1}</div>
            <div className="text">
              <div className="title">{content.title}</div>
              <div className="desc">{content.desc}</div>
            </div>
          </Row>
        );
      })}
    </Row>
  );
};

export default CustomerComp2;
