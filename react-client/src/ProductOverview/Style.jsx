import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Style ({ style }) {
  return (
    <Avatar src={style.photos[0].thumbnail_url}/>
  )
}

export default Style;