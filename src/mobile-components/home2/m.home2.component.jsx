import React from 'react';
import { Row } from 'antd';
import GraButton from '../../components/button/grabutton.component';
import './m.home2.styles.scss';

const MobileHomeComp2 = () => {
  return (
    <Row className="m-home2">
      <div className="content">
        <div className="title-container">
          <span>Lorem ipsum dolor sit amet, consectetur</span>
        </div>
        <div className="text-container">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </span>
        </div>
        <div className="button-container">
          <GraButton inverse={true}>Case Studies</GraButton>
        </div>
      </div>
    </Row>
  );
};

export default MobileHomeComp2;
