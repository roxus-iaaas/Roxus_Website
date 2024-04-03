import React from 'react';
import { Row } from 'antd';
import SimpleStep from '../simple-step/simple-step.component';
import GraButton from '../button/grabutton.component';
import './about4.styles.scss';

const AboutUsComp4 = () => {
  return (
    <Row className="about-us-4">
      <div className="content">
        <div className="title">
          <span>Lorem ipsum dolor sit amet consectetuer</span>
        </div>
        <div className="text">
          <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes
          </span>
        </div>
        <div className="button">
          <GraButton>Read more</GraButton>
        </div>
      </div>

      <SimpleStep stepContents={[1, 2, 3]} activeIndex={0} />
    </Row>
  );
};

export default AboutUsComp4;
