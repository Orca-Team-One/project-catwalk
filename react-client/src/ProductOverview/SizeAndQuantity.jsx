import React from 'react';

function Selectors(props) {
  let skuNums = Object.keys(props.details.results[0].skus); // [1, 2, 3, 4, 5, 6]
  let quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {/* Size Selector */}
      <div>
        <label htmlFor="size" placeholder="Select size:">Select size: </label>
        <select name="size" className="sizeSelector">
          {skuNums.map((num) =>
            <option>{props.details.results[0].skus[`${num}`].size}</option>
          )}

        </select>
      </div>

      {/* Quantity Selector */}
      <div>
        <label htmlFor="size">Select quantity: </label>
        <select name="size" className="sizeSelector">
          {quantities.map((quantity) =>
            <option>{quantity}</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default Selectors;