import React from 'react';
import MobileCustomerComp1 from '../../mobile-components/customer1/m.customer1.component';
import MobileCustomerComp2 from '../../mobile-components/customer2/m.customer2.component';
import MobileCustomerComp3 from '../../mobile-components/customer3/m.customer3.component';
import Contact from '../../mobile-components/contact/m.contact.component';
import './m.customers.styles.scss';

const MobileCustomerPage = () => {
  return (
    <section>
      <MobileCustomerComp1 />
      <MobileCustomerComp2 />
      <MobileCustomerComp3 />
      <Contact />
    </section>
  );
};

export default MobileCustomerPage;
