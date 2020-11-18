import React from 'react';

function StyleSelector (props) {
  return (
    <div>
      <p>Style > Style Selected: {props.details.results[0].name}</p>

      <p>Style Icons</p>
      {props.details.results.map((result) =>
        <img src={result.photos[0].thumbnail_url}></img>
      )}
    </div>
  );
}

export default StyleSelector;