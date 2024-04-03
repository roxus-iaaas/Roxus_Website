import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './small-menu-right.styles.scss';

const SmallMenuRight = ({ menus, activeIndex }) => {
  const [menuIndex, setMenuIndex] = useState(activeIndex);

  return (
    <Row className="small-menu-right">
      {menus.map((menu, index) => (
        <Col
          key={index}
          className={`menu-item ${index === menuIndex ? 'active' : ''}`}
        >
          <a
            href={`#${menu.anchor}`}
            onClick={() => {
              setMenuIndex(index);
            }}
          >
            {menu.title}
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default SmallMenuRight;
