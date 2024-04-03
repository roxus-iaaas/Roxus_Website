import React from 'react';
import './m.solution.styles.scss';
import MobileSolutionComp1 from '../../mobile-components/solution1/m.solution1.component';
import MobileSolutionComp2 from '../../mobile-components/solution2/m.solution2.component';
import MobileSolutionComp3 from '../../mobile-components/solution3/m.solution3.component';
import MobileSolutionComp4 from '../../mobile-components/solution4/m.solution4.component';
import MobileSolutionComp5 from '../../mobile-components/solution5/m.solution5.component';
import Contact from '../../mobile-components/contact/m.contact.component';

const MobileSolutionPage = () => {
  return (
    <div className="m-solution-page">
      <MobileSolutionComp1 />
      <MobileSolutionComp2 />
      <MobileSolutionComp3 />
      <MobileSolutionComp4 />
      <MobileSolutionComp5 />
      <Contact />
    </div>
  );
};

export default MobileSolutionPage;
