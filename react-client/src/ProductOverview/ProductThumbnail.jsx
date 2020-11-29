import React from 'react';
import { Avatar } from '@material-ui/core';

function ProductThumbnail({ photo, index, changeThumbnail }) {
  return (
    <div className="thumbnail-image-container">
      <Avatar
        className="thumbnail-image"
        variant="square"
        style={{ height: '55px', width: '55px' }}
        src={photo.thumbnail_url}
        onClick={(event) => { changeThumbnail(event, index); }}/><br></br>
    </div>
  );
}

export default ProductThumbnail;