import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../../components/header/header.component";
import HomeComp1 from "../../components/home1/home1.component";
import HomeComp2 from "../../components/what-we-do/what-we-do.component";
import HomeComp3 from "../../components/home3/home3.component";
import HomeComp4 from "../../components/industry2/industry2.component";
import HomeComp5 from "../../components/solution4/solution4.component";
import HomeComp6 from "../../components/home6/home6.component";
import { isMobileOnly } from "react-device-detect";

const HomePage = () => {
  const fullpageOptions = {
    callbacks: ["onLeave", "afterLoad", "afterRender"],
    anchors: [
      "Home",
      "WhyRoxus",
      "Solutions",
      "Automate",
      "Testimonials",
      "Journey",
    ],
  };

  return (
    <React.Fragment>
      <Header isMobileOnly={isMobileOnly} />
      {isMobileOnly ? (
        <div>
          <HomeComp1 id="HomeComp1" />
          <HomeComp2 id="HomeComp2" />
          <HomeComp3 id="HomeComp3" />
          <HomeComp4 id="HomeComp4" />
          <HomeComp5 id="HomeComp5" />
          <HomeComp6 id="HomeComp6" />
        </div>
      ) : (
        <ReactFullpage
          {...fullpageOptions}
          licenseKey=""
          scrollingSpeed={1000} /* Options here */
          render={() => {
            return (
              <div id="fullpage-wrapper">
                <div className="section">
                  <HomeComp1 id="HomeComp1" />
                </div>
                <div className="section">
                  <HomeComp2 id="HomeComp2" />
                </div>
                <div className="section">
                  <HomeComp3 id="HomeComp3" />
                </div>
                <div className="section">
                  <HomeComp4 id="HomeComp4" />
                </div>
                <div className="section">
                  <HomeComp5 id="HomeComp5" />
                </div>
                <div className="section">
                  <HomeComp6 id="HomeComp6" />
                </div>
              </div>
            );
          }}
        />
      )}
    </React.Fragment>
  );
};

export default HomePage;
