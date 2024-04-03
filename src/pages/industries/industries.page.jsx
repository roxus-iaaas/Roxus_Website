import React from 'react';

import IndustryComp1 from '../../components/industry1/industry1.component';
import IndustryComp2 from '../../components/industry2/industry2.component';
import IndustryComp3 from '../../components/industry3/industry3.component';
import AboutComp3 from '../../components/about3/about3.component';
import SmallMenuLeft from '../../components/small-menu-left/small-menu-left.component';
import Contact from '../../components/contact/contact.component';
import { industryMenus } from '../../constant/menu';
import './industries.styles.scss';

const IndustryPage = () => {
  return (
    <div className="industry-page">
      <SmallMenuLeft menus={industryMenus} activeIndex={0} />
      <IndustryComp1 />
      <IndustryComp2 />
      <IndustryComp3 />
      <AboutComp3 />
      <Contact />
    </div>
  );
};

export default IndustryPage;
