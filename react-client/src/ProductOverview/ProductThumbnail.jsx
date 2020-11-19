import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function ProductThumbnail(props) {
  return (
    <div>
      <Avatar
        variant="rounded"
        src={props.photo.thumbnail_url}
      />
      <br></br>
    </div>
  );
}

export default ProductThumbnail;