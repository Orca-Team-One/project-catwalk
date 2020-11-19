import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Badge from '@material-ui/core/Badge';

function StyleSelector (props) {
  return (
    <div>
      <p>Style > Style Selected: {props.details.results[0].name}</p>

      <p>Style Icons</p>
      {props.details.results.map((result) =>
        <div>
          <Avatar src={result.photos[0].thumbnail_url} />
        </div>
      )}
    </div>
  );
}

export default StyleSelector;