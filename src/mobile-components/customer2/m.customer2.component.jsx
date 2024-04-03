import React from "react";
import { Row, Col } from "antd";
import questionMark from "../../assets/images/customers/question-mark.png";
import check from "../../assets/images/customers/check.png";
import { contentCustomer2 } from "../../constant/customer";
import "./m.customer2.styles.scss";

const CustomerComp2 = () => {
  return (
    <Row className="mobile-customer-2">
      <Row className="content first">
        <div className="wrap-content">
          <div className="round-content">1</div>
          <div className="question-mark">
            <img src={questionMark} alt="Question mark"></img>
          </div>
          <Col span={24} className="text-content">
            <div className="title">
              <span>{contentCustomer2[0].title}</span>
            </div>
            <div className="desc">{contentCustomer2[0].desc}</div>
          </Col>
        </div>
      </Row>
      <Row className="content second">
        <div className="wrap-content-pink">
          <div className="round-content">2</div>
          <Col span={24} className="text-content">
            <div className="title">
              <span>{contentCustomer2[1].title}</span>
            </div>
            <div className="desc">{contentCustomer2[1].desc}</div>
          </Col>
        </div>
      </Row>
      <Row className="content third">
        <div className="wrap-content">
          <div className="check">
            <img src={check} alt="Check"></img>
          </div>
          <div className="round-content">3</div>
          <Col span={24} className="text-content">
            <div className="title">
              <span>{contentCustomer2[2].title}</span>
            </div>
            <div className="desc">{contentCustomer2[2].desc}</div>
          </Col>
        </div>
      </Row>
    </Row>
  );
};

export default CustomerComp2;
