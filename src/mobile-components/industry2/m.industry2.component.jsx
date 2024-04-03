import React from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Row, Col } from "antd";
import "./m.industry2.styles.scss";
import GraButton from "../../components/button/grabutton.component";
import { productList } from "../../constant/industry";

const MobileIndustryComp2 = ({ toggleOpenContact }) => {
  return (
    <div className="mobile-industry-2">
      <Row className="title">
        <span>Digital Transformation Examples</span>
      </Row>
      <Row className="product-list" gutter={[0, 36]}>
        {productList.map((product, index) => {
          return (
            <Col key={index} span={24}>
              <Row align="middle">
                <Col span={6} className="image-container">
                  <img src={product.icon} alt="Icon"></img>
                </Col>
                <Col span={16}>
                  <div className="product-title">
                    <span>{product.title}</span>
                  </div>
                  <div className="description">
                    <span>{product.desc}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
      <Row>
        <GraButton handleClick={toggleOpenContact} inverse={true}>
          Get Started
        </GraButton>
      </Row>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenContact: () => dispatch(toggleOpenContact()),
});

export default connect(null, mapDispatchToProps)(MobileIndustryComp2);
