import React from 'react';

function ProductThumbnail(props) {
  return (
    <div>
      <p>Product Image Single Thumbnail: </p>
      <img src={props.photo.thumbnail_url}></img>
    </div>
  );
}

export default ProductThumbnail;