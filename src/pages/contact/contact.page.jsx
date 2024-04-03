import React from "react";
import Contact from "../../components/contact/contact.component";
import CommonHeader from "../../components/header/common-header.component";
import Footer from "../../components/footer/footer.component";
import { isMobileOnly } from "react-device-detect";

import "./contact.styles.scss";
const ContactPage = () => {
  return (
    <div className="contact-page">
      <CommonHeader />
      <Contact />
      <Footer isBottom={!isMobileOnly} />
    </div>
  );
};

export default ContactPage;
