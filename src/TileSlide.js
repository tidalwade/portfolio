import React from 'react';

export default function TileSlide(props) {
  const {
      tile,
    } = props

  return (
    <div>
    {tile.map(tiles => {
      return (
        <div key='1' className={`greeting-tile-slide`}>
          <div className="greeting-tile-slide_content">
            <p>{tiles.content}</p>
            <p>{tiles.linkText}</p>
          </div>
        </div>
      )
    })}
    </div>
  );
};
