import React from 'react';
import { ProductImage } from './ProductImage';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section className='elc-product-grid'>
      <h2 className='elc-product-grid__title'>{heading}</h2>
      <div className='elc-product-grid-wrapper'>
      <div className='elc-product-grid-wrapper__item'>
        <ProductImage image={p1Img} />
        <div>
            <h1 className='elc-product-grid-wrapper__item-title'>{p1Name}</h1>
            <h4 className='elc-product-grid-wrapper__item-titlesub'>{p1Price}</h4>
            <button className='elc-product-grid-wrapper__item-btn elc-btn'>{cta1}</button>
        </div>
      </div>
      <div className='elc-product-grid-wrapper__item'>
        <ProductImage image={p2Img} />
        <div>
            <h1 className='elc-product-grid-wrapper__item-title'>{p2Name}</h1>
            <h4 className='elc-product-grid-wrapper__item-titlesub'>{p2Price}</h4>
            <button className='elc-product-grid-wrapper__item-btn elc-btn'>{cta1}</button>
        </div>
      </div>
      <div className='elc-product-grid-wrapper__item'>
        <ProductImage image={p3Img} />
        <div>
            <h1 className='elc-product-grid-wrapper__item-title'>{p3Name}</h1>
            <h4 className='elc-product-grid-wrapper__item-titlesub'>{p3Price}</h4>
            <button className='elc-product-grid-wrapper__item-btn elc-btn'>{cta1}</button>
        </div>
      </div>
      <div className='elc-product-grid-wrapper__item'>
        <ProductImage image={p4Img} />
        <div>
            <h1 className='elc-product-grid-wrapper__item-title'>{p4Name}</h1>
            <h4 className='elc-product-grid-wrapper__item-titlesub'>{p4Price}</h4>
            <button className='elc-product-grid-wrapper__item-btn elc-btn'>{cta1}</button>
        </div>
      </div>
      </div>
  </section>
