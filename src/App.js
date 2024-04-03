import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import useWindowDimensions from "./hooks/function";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuOpen } from "./redux/menu/menu.selectors";
import { selectContactOpen } from "./redux/contact/contact.selectors";
import { selectGreenScreenActive } from "./redux/green-screen/green-screen.selectors";
import { toggleGreenScreen } from "./redux/green-screen/green-screen.actions";
import PreLoader from "./components/preloader/preloader.component";
import TypingScreen from "./components/typing-screen/typing-screen.component";
import { isMobile } from "react-device-detect";
import ReactGA from "react-ga";
import Aos from "aos";
import LinkedInTag from "react-linkedin-insight";
import "aos/dist/aos.css";

import "./App.css";

const OpenMenu = lazy(() =>
  import("./components/open-menu/open-menu.component")
);
const ContactModal = lazy(() =>
  import("./components/contact-popup/contact-modal.component")
);
const HomePage = lazy(() => import("./pages/home/home.page"));
const CompanyPage = lazy(() => import("./pages/our-company/our-company.page"));
const ContactPage = lazy(() => import("./pages/contact/contact.page"));

const MobileHomePage = lazy(() => import("./mobile-pages/home/m.home.page"));
const MobileCompanyPage = lazy(() =>
  import("./mobile-pages/our-company/m.our-company.page")
);
const MobileContactPage = lazy(() =>
  import("./mobile-pages/contact/m.contact.page")
);

function App({ isGreenScreen, isOpenMenu, isContactOpen, toggleGreenScreen }) {
  ReactGA.initialize("UA-173962268-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
  LinkedInTag.init("2736313");
  const { width } = useWindowDimensions();
  const [mobileLandscape, setMobileLandscape] = useState(false);
  const [loaded, setLoaded] = useState("");

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  useEffect(() => {
    toggleGreenScreen();
  }, [toggleGreenScreen]);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoaded("loaded"), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoaded("loaded"), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      setMobileLandscape(false);
    } else if (window.innerHeight < window.innerWidth) {
      setMobileLandscape(true);
    }
  }, [width]);

  return (
    <div className={`${loaded}`}>
      <Suspense fallback={<PreLoader />}>
        <PreLoader />
        {isOpenMenu && <OpenMenu />}
        {isGreenScreen && window.location.pathname === "/" && <TypingScreen />}
        <ContactModal visible={isContactOpen} />
        <Route
          exact
          path="/"
          render={() => {
            return isMobile && !mobileLandscape ? (
              <MobileHomePage />
            ) : (
              <HomePage />
            );
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return isMobile && !mobileLandscape ? (
              <MobileCompanyPage />
            ) : (
              <CompanyPage />
            );
          }}
        />
        <Route
          exact
          path="/contact"
          render={() => {
            return isMobile && !mobileLandscape ? (
              <MobileContactPage />
            ) : (
              <ContactPage />
            );
          }}
        />
      </Suspense>
    </div>
  );
}

const mapStatesToProps = createStructuredSelector({
  isOpenMenu: selectMenuOpen,
  isContactOpen: selectContactOpen,
  isGreenScreen: selectGreenScreenActive,
});

const mapDispatchToProps = (dispatch) => ({
  toggleGreenScreen: () => dispatch(toggleGreenScreen()),
});

export default connect(mapStatesToProps, mapDispatchToProps)(App);
