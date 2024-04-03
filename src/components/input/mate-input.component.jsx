import React from 'react';

import './mate-input.styles.scss';

const MaterialInput = ({ name, label, required }) => {
  return (
    <div>
      <input name={name} type="text" required="required" />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{label}</label>
    </div>
  );
};

export default MaterialInput;
