import React, { useState, useEffect } from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, onUpdateCart, cartItems }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cartItem = cartItems.find((item) => item.name === product.name);
    if (!cartItem) {
      setQuantity(0);
    }
  }, [cartItems, product.name]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateCart(product, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateCart(product, newQuantity);
    }
  };

  return (
    <div className="card">
      <img src={product.image.desktop} alt={product.name} />
      {quantity === 0 ? (
        <button onClick={handleIncrement}>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" fill="none" viewBox="0 0 21 20">
            <g fill="#C73B0F" clipPath="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>
          Add to Cart
        </button>
      ) : (
        <div className="buttons">
          <div className="minus btn" onClick={handleDecrement}>-</div>
          <div className="qty">{quantity}</div>
          <div className="plus btn" onClick={handleIncrement}>+</div>
        </div>
      )}
      <h6>{product.category}</h6>
      <h4>{product.name}</h4>
      <h5>Price: ${product.price.toFixed(2)}</h5>
    </div>
  );
}

export default ProductCard;

