import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function ProductThumbnail({ photo, index, changeThumbnail }) {
  return (
    <div>
      <Avatar
        variant="rounded"
        src={photo.thumbnail_url}
        onClick={(event) => { changeThumbnail(event, index); }}/>
    </div>
  );
}

export default ProductThumbnail;