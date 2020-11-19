import React from 'react';

function ProductDescription({ product, info }) {
  return (
    <div className="productDescription">
      <span>
        <h5>{product.slogan}</h5>
        <p>{product.description}</p>
      </span>
      <span>
        <h5>Features: </h5>
        {info.features.map((feature) =>
          <p>{feature.feature}: {feature.value}</p>
        )}
      </span>
    </div>
  );
}

export default ProductDescription;