import React from 'react';

import caret from './images/caret.svg';

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section className='elc-product__desc'>
    <h2 className='elc-product__desc__title'>{name}</h2>
    <p className='elc-product__desc__titlesub'>{description}</p>
    <figure className='elc-product__desc__rating'>
      <img className='elc-product__desc__rating-stars' src={rating} alt="Product Rating" />
      <img className='elc-product__desc__rating-arrow' src={caret} alt="View All Ratings" />
    </figure>
    <section className='elc-product__desc__features'>
      <div className='elc-product__desc__features-item'>
        <h4>Benefits</h4>
        <p>{features.benefits}</p>
      </div>
      <div className='elc-product__desc__features-item'>
        <h4>Finish</h4>
        <p>{features.finish}</p>
      </div>
      <div className='elc-product__desc__features-item'>
        <h4>Coverage</h4>
        <p>{features.coverage}</p>
      </div>
      <div className='elc-product__desc__features-item'>
        <h4>Key Ingredients</h4>
        <p>
          {features.keyIngredients} <a href="http://www.clinique.com">More</a>
        </p>
      </div>
    </section>
    <section className='elc-product__desc__shade'>
      <div className='elc-product__desc__shade-wrapper'>
      <span>{shade.name}</span>
      <div className='elc-product__desc__shade-wrapper-color' style={{ background: shade.color }}></div>
      </div>
    </section>
  </section>
);
