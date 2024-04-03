import React from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Row, Col } from "antd";
import "./industry2.styles.scss";
import GraButton from "../../components/button/grabutton.component";
import { productList } from "../../constant/industry";

const IndustryComp2 = ({ toggleOpenContact }) => {
  return (
    <Row className="industry-2" align="top">
      <Row className="heading">
        <Col span={24}>
          <span>Digital Transformation Examples</span>
        </Col>
      </Row>
      <Row className="list-product" gutter={[0, 36]}>
        {productList.map((product, index) => {
          if (index % 2 === 0) {
            return (
              <Col key={index} span={12}>
                <Row align="middle">
                  <Col span={5}>
                    <img
                      src={product.icon}
                      alt="Icon"
                      className="icon-image"
                    ></img>
                  </Col>
                  <Col span={16}>
                    <div className="title">
                      <span>{product.title}</span>
                    </div>
                    <div className="description">
                      <span>{product.desc}</span>
                    </div>
                  </Col>
                  <Col span={3} />
                </Row>
              </Col>
            );
          } else {
            return (
              <Col key={index} span={12}>
                <Row align="middle" justify="end">
                  <Col span={3} />
                  <Col span={5}>
                    <img
                      src={product.icon}
                      alt="Icon"
                      className="icon-image"
                    ></img>
                  </Col>
                  <Col span={16}>
                    <div className="title">
                      <span>{product.title}</span>
                    </div>
                    <div className="description">
                      <span>{product.desc}</span>
                    </div>
                  </Col>
                  <Col span={2} />
                </Row>
              </Col>
            );
          }
        })}
      </Row>
      <div className="button-container">
        <GraButton handleClick={toggleOpenContact} inverse={true}>
          Get Started
        </GraButton>
      </div>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenContact: () => dispatch(toggleOpenContact()),
});

export default connect(null, mapDispatchToProps)(IndustryComp2);
