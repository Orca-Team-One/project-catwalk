import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function ProductThumbnail({ photo }) {
  return (
    <div>
      <Avatar
        variant="rounded"
        src={photo.thumbnail_url} />
    </div>
  );
}

export default ProductThumbnail;