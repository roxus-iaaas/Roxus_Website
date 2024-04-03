import React from 'react';
import { Row } from 'antd';
import SimpleStep from '../../components/simple-step/simple-step.component';
import GraButton from '../../components/button/grabutton.component';
import './m.about4.styles.scss';

const AboutUsComp4 = () => {
  return (
    <Row className="mobile-about-4">
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

      <SimpleStep
        lineStyle={{ top: '15vh', width: '92vw', right: 0 }}
        stepContents={[1, 2, 3]}
        contentStyle={{ top: 'calc(15vh - 18px)' }}
        initialMargin={45}
        contentLeft="8vw"
        activeIndex={0}
      />
    </Row>
  );
};

export default AboutUsComp4;
