import React from "react";
import MobileHeader from "../../mobile-components/header/m.header.component";
import MobileHomeComp1 from "../../mobile-components/home1/m.home1.component";
import MobileHomeComp2 from "../../mobile-components/what-we-do/m.what-we-do.component";
import MobileHomeComp3 from "../../mobile-components/home3/m.home3.component";
import MobileHomeComp4 from "../../mobile-components/industry2/m.industry2.component";
import MobileHomeComp5 from "../../mobile-components/solution4/m.solution4.component";
import MobileHomeComp6 from "../../mobile-components/about5/m.about5.component";
import MobileFooter from "../../mobile-components/footer/m.footer.component";
import "./m.home.styles.scss";

const MobileHomePage = () => {
  return (
    <React.Fragment>
      <MobileHeader isTransparent={true} />
      <MobileHomeComp1 />
      <MobileHomeComp2 id="WhyRoxus" />
      <MobileHomeComp3 />
      <MobileHomeComp4 />
      <MobileHomeComp5 />
      <MobileHomeComp6 />
      <MobileFooter />
    </React.Fragment>
  );
};

export default MobileHomePage;
