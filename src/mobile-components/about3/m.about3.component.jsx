import React from 'react';
import { Row } from 'antd';
import BottomLine from '../../components/bottom-line/bottom-line.component';
import laptop from '../../assets/images/about/laptop.png';
import './m.about3.styles.scss';

const MobileAboutUsComp3 = () => {
  return (
    <Row className="mobile-about-3">
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
      <BottomLine />
    </Row>
  );
};

export default MobileAboutUsComp3;
