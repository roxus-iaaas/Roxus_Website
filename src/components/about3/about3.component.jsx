import React from 'react';
import { Row } from 'antd';
import laptop from '../../assets/images/about/laptop.png';
import './about3.styles.scss';

const AboutUsComp3 = () => {
  return (
    <Row className="about-us-3" justify="center">
      <div className="percent">
        <span>53%</span>
      </div>
      <div className="laptop">
        <img src={laptop} alt="Laptop"></img>
      </div>
      <div className="text">
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes
        </span>
      </div>
    </Row>
  );
};

export default AboutUsComp3;
