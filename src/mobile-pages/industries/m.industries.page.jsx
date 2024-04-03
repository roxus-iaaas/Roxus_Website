import React from 'react';
import MobileIndustryComp1 from '../../mobile-components/industry1/m.industry1.component';
import MobileIndustryComp2 from '../../mobile-components/industry2/m.industry2.component';
import MobileIndustryComp3 from '../../mobile-components/industry3/m.industry3.component';
import MobileIndustryComp4 from '../../mobile-components/industry4/m.industry4.component';
import Contact from '../../mobile-components/contact/m.contact.component';
import './m.industries.styles.scss';

const MobileIndustryPage = () => {
  return (
    <div className="m-industry-page">
      <MobileIndustryComp1 />
      <MobileIndustryComp2 />
      <MobileIndustryComp3 />
      <MobileIndustryComp4 />
      <Contact />
    </div>
  );
};

export default MobileIndustryPage;
