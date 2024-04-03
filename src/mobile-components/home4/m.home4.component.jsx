import React from 'react';

import { Row } from 'antd';
import HorizontalLine from '../../components/horizontal-line/horizontal-line.component';
import VerticalLine from '../../components/vertical-line/vertical-line.component';
import GraButton from '../../components/button/grabutton.component';
import BottomLine from '../../components/bottom-line/bottom-line.component';
import './m.home4.styles.scss';

const MobileHomeComp4 = () => {
  return (
    <Row className="m-home4">
      <div className="content">
        <div className="content1">
          <div className="title-container">
            <span>Lorem ipsum dolor sit amet, consectetur</span>
          </div>
          <div className="text-container">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <div className="button-container">
            <GraButton inverse={true}>Our Team</GraButton>
          </div>
        </div>
        <div className="content2">
          <div className="title-container">
            <span>Lorem ipsum dolor sit amet, consectetur</span>
          </div>
          <div className="text-container">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <div className="button-container">
            <GraButton inverse={true}>About Roxus</GraButton>
          </div>
        </div>
      </div>
      <HorizontalLine
        lineStyles={{
          top: '15vh',
          left: '0',
          width: '80vw',
          borderTop: '1px solid #fc9107',
        }}
        content={1}
      />
      <VerticalLine
        lineStyles={{
          left: '12vw',
          bottom: '8vh',
          borderLeft: '1px solid #fa106c',
          height: '38vh',
        }}
        contentStyles={{ top: '0', border: '1px solid #fa106c' }}
        content={2}
      />
      <BottomLine />
    </Row>
  );
};

export default MobileHomeComp4;
