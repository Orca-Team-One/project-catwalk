import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Style ({ style, index, changeStyle }) {
  return (
    <Avatar
      className="style-icons"
      style={{ height: '60px', width: '60px' }}
      src={style.photos[0].thumbnail_url}
      onClick={(event) => { changeStyle(event, index); }}/>
  )
}

export default Style;