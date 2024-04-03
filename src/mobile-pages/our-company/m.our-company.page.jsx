import React from "react";
import MobileHeader from "../../mobile-components/header/m.header.component";
import MobileAboutUsComp1 from "../../mobile-components/about1/m.about1.component";
import MobileFooter from "../../mobile-components/footer/m.footer.component";
import ExecutiveComp from "../../components/executive/executive.component";
import ReadMoreParagraph from "../../components/read-more-paragraph/read-more-paragraph.component";
import { companyContent } from "../../constant/contents";
import "./m.our-company.styles.scss";

const OurCompany = () => {
  return (
    <div className="m-our-company">
      <MobileHeader />
      <MobileAboutUsComp1 />
      <ExecutiveComp />
      <div className="read-more-container">
        {companyContent.map((content, index) => (
          <ReadMoreParagraph
            key={index}
            content={content}
            yellow={index % 2 === 0}
          />
        ))}
      </div>
      <MobileFooter />
    </div>
  );
};

export default OurCompany;
