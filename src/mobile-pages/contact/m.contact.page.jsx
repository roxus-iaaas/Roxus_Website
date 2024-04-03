import React from "react";
import MobileHeader from "../../mobile-components/header/m.header.component";
import MobileContact from "../../mobile-components/contact/m.contact.component";
import MobileFooter from "../../mobile-components/footer/m.footer.component";

const ContactPage = () => {
  return (
    <div className="m-contact-page">
      <MobileHeader />
      <MobileContact />
      <MobileFooter />
    </div>
  );
};

export default ContactPage;
