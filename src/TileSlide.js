
import React from 'react';
import PropTypes from 'prop-types';

export const TileSlide = ({index, photo, content, linkText, linkURL, tileClass }) => {

  return (
    <div key={index} className={`greeting-tile-slide`}>
      <div className={`greeting-tile-photo ${tileClass}`}></div>
      <div className="greeting-tile-slide_content">
        <p>{content}</p>
        <p>{linkText}</p>
      </div>
    </div>
  );
};

TileSlide.propTypes = {
  key: PropTypes.number,
  photo: PropTypes.string,
  content: PropTypes.string,
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
};


export default TileSlide;