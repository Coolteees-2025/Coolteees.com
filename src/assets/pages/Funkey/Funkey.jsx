import React from 'react';
import ProductCard from '../../Components/ProductCard';
import FunkeyItem from '../../Components/Funkey-item';

const ProductsPage = () => {
  return (
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', padding: '20px' }}>
      {FunkeyItem.map((item, idx) => (
        <ProductCard key={idx} product={item} />
    ))}
    </div>
  );
};

export default ProductsPage;