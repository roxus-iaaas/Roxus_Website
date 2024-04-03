import React from 'react';
import { Row, Col } from 'antd';
import './small-menu-left.styles.scss';

const SmallMenuLeft = ({ menus, activeIndex }) => {
  return (
    <Row className="small-menu-left">
      {menus.map((menu, index) => (
        <Col
          key={index}
          className={`menu-item ${index === activeIndex ? 'active' : ''}`}
        >
          <span>{menu}</span>
        </Col>
      ))}
    </Row>
  );
};

export default SmallMenuLeft;
