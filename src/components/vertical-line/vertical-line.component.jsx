import React from 'react';

import './vertical-line.styles.scss';

const VerticalLine = ({
  lineStyles = {
    left: '44vw',
    top: '0',
    borderLeft: '1px solid #fa106c',
    height: '66vh',
  },
  contentStyles = { top: '30vh', border: '1px solid #fa106c' },
  content,
}) => {
  return (
    <div className="vertical-line">
      <div className="line" style={lineStyles}>
        {content && (
          <div className="round-content" style={contentStyles}>
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalLine;
