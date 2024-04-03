import React from 'react';
import MobileAboutUsComp1 from '../../mobile-components/about1/m.about1.component';
import MobileAboutUsComp2 from '../../mobile-components/about2/m.about2.component';
import MobileAboutUsComp3 from '../../mobile-components/about3/m.about3.component';
import MobileAboutUsComp4 from '../../mobile-components/about4/m.about4.component';
import MobileAboutUsComp5 from '../../mobile-components/about5/m.about5.component';
import MobileContact from '../../mobile-components/contact/m.contact.component';
import './m.about-us.styles.scss';

const MobileAboutUsPage = () => {
  return (
    <section className="m-about-us">
      <MobileAboutUsComp1 />
      <MobileAboutUsComp2 />
      <MobileAboutUsComp3 />
      <MobileAboutUsComp4 />
      <MobileAboutUsComp5 />
      <MobileContact />
    </section>
  );
};

export default MobileAboutUsPage;
