import React from 'react';
import BottomLine from '../../components/bottom-line/bottom-line.component';
import './m.customer3.styles.scss';

const MobileCustomerComp3 = () => {
  return (
    <div className="mobile-customer-3">
      <div className="percent">
        <span>53%</span>
      </div>
      <div className="text">
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </span>
      </div>
      <BottomLine />
    </div>
  );
};

export default MobileCustomerComp3;
