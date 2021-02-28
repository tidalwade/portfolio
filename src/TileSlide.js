
import React from 'react';

export default function TilesSlide(props) {
  const {
      index,
      content,
      linkText,
      tileClass
    } = props

  return (
    <div key={index} className={`greeting-tile-slide`}>
    <div className={`greeting-tile-photo ${tileClass}`}></div>
    <div className="greeting-tile-slide_content">
      <p>{content}</p>
      <p>{linkText}</p>
    </div>
  </div>
  )
}