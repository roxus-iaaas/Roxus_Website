import React from "react";
import AboutUsComp5 from "../about5/about5.component";
import TakeNextStep from "../../components/take-next-step/take-next-step.component";
import Footer from "../footer/footer.component";
import { isMobileOnly } from "react-device-detect";
import "./home6.styles.scss";

const HomeComp6 = () => {
  return (
    <div className="home-comp6">
      <div className="automation-journey">
        <AboutUsComp5></AboutUsComp5>
      </div>
      {!isMobileOnly && <TakeNextStep />}
      <Footer />
    </div>
  );
};

export default HomeComp6;
