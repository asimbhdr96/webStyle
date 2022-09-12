import React from 'react';

export const ProductImage = ({ image }) =>
  <figure>
    <img className='elc-product-image' src={image} alt="Product" />
  </figure>
