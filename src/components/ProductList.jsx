import React from 'react'
import ProductCard from './ProductCard.jsx'
import '../styles/ProductList.css'


function ProductList({ products, onUpdateCart, cartItems }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onUpdateCart={onUpdateCart}
          cartItems={cartItems}
        />
      ))}
    </div>
  )
}

export default ProductList;
