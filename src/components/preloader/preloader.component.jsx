import React from 'react';
import './preloader.styles.scss';

const PreLoader = () => {
  return (
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
};

export default PreLoader;
