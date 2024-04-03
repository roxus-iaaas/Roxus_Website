import React from 'react';
import SmallMenuLeft from '../../components/small-menu-left/small-menu-left.component';
import AboutUsComp1 from '../../components/about1/about1.component';
import AboutUsComp2 from '../../components/about2/about2.component';
import AboutUsComp3 from '../../components/about3/about3.component';
import AboutUsComp4 from '../../components/about4/about4.component';
import AboutUsComp5 from '../../components/about5/about5.component';
import Contact from '../../components/contact/contact.component';
import { aboutUsMenus } from '../../constant/menu';
import './about-us.styles.scss';

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <SmallMenuLeft menus={aboutUsMenus} activeIndex={0}></SmallMenuLeft>
      <AboutUsComp1 />
      <AboutUsComp2 />
      <AboutUsComp3 />
      <AboutUsComp4 />
      <AboutUsComp5 />
      <Contact />
    </div>
  );
};

export default AboutUsPage;
