import React from 'react';
import './horizontal-line.styles.scss';

const HorizontalLine = ({
  lineStyles = {
    top: '33vh',
    left: '0',
    width: '40vw',
    borderTop: '1px solid #fc9107',
  },
  contentStyles = { left: '20vw', border: '1px solid #fc9107' },
  content,
}) => {
  return (
    <div className="horizontal-line">
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

export default HorizontalLine;
