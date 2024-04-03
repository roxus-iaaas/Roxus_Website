import React from "react";
import CommonHeader from "../../components/header/common-header.component";
import AboutUsComp1 from "../../components/about1/about1.component";
import ExecutiveComp from "../../components/executive/executive.component";
import Footer from "../../components/footer/footer.component";
import { companyContent } from "../../constant/contents";
import ReadMoreParagraph from "../../components/read-more-paragraph/read-more-paragraph.component";
import "./our-company.styles.scss";

const OurCompany = () => {
  return (
    <div className="our-company-container">
      <CommonHeader />
      <AboutUsComp1 />
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
      <Footer />
    </div>
  );
};

export default OurCompany;
