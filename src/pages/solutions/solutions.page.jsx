import React from 'react';

import SmallMenuLeft from '../../components/small-menu-left/small-menu-left.component';
import SolutionComp1 from '../../components/solution1/solution1.component';
import SolutionComp2 from '../../components/solution2/solution2.component';
import IndustryComp2 from '../../components/industry2/industry2.component';
import SolutionComp4 from '../../components/solution4/solution4.component';
import AboutComp5 from '../../components/about5/about5.component';
import Contact from '../../components/contact/contact.component';

import { solutionMenus } from '../../constant/menu';
import './solutions.styles.scss';

const SolutionPage = () => {
  return (
    <section className="solution-page">
      <SmallMenuLeft menus={solutionMenus} activeIndex={0} />
      <SolutionComp1 />
      <SolutionComp2 />
      <IndustryComp2 />
      <SolutionComp4 />
      <AboutComp5 />
      <Contact />
    </section>
  );
};

export default SolutionPage;
