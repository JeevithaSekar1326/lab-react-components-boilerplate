
import React from 'react';

function GalleryItem({ id, img }) {
  return (
    <div className="column">
      <img src={img} alt={`Image ${id}`} />
    </div>
  );
}

export default GalleryItem;
