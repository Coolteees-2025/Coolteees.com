import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <section data-testid="product-card" className="product-card">
      <a data-testid="product-card-link" href={product.link} className="product-card-link">
        <figure title={product.title} className="product-card-figure">
          <img
            src={product.image}
            alt={product.title}
            loading="eager"
            width="200"
            height="500"
            style={{ aspectRatio: '3 / 4', objectFit: 'cover', width: '100%' }}
          />
          <div className="product-card-badge">
            <div className="product-card-rating">
              <div className="rating-box">
                <div className="star-icon">⭐</div>
                <span>{product.rating}</span>
              </div>
              {product.isNewArrival && <div className="new-arrival">NEW ARRIVAL</div>}
            </div>
          </div>
          <div className="design-of-week">DESIGN OF THE WEEK</div>
        </figure>
      </a>
      <div className="product-card-info">
        <div className="product-card-brand">
          <span>{product.brand}</span>
          <button className="wishlist-button">♡</button>
        </div>
        <span className="product-card-name">{product.title}</span>
        <div className="product-card-price">
          <span className="price">₹{product.price}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discount">{product.discount}% off</span>
        </div>
        <div className="fabric-tag">{product.fabric}</div>
      </div>
    </section>
  );
};

export default ProductCard;
