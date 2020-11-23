import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Style ({ style, changeStyle }) {
  return (
    <Avatar
      src={style.photos[0].thumbnail_url}
      onClick={(event) => {
        changeStyle(style.style_id, event);
      }}/>
  )
}

export default Style;