import React from 'react';
import SmallMenuLeft from '../../components/small-menu-left/small-menu-left.component';
import CustomerComp1 from '../../components/customer1/customer1.component';
import CustomerComp2 from '../../components/customer2/customer2.component';
import CustomerComp3 from '../../components/customer3/customer3.component';
import Contact from '../../components/contact/contact.component';
import { customerMenus } from '../../constant/menu';
import './customers.styles.scss';

const CustomerPage = () => {
  return (
    <div className="customers">
      <SmallMenuLeft menus={customerMenus} activeIndex={0}></SmallMenuLeft>
      <CustomerComp1 />
      <CustomerComp2 />
      <CustomerComp3 />
      <Contact />
    </div>
  );
};

export default CustomerPage;
