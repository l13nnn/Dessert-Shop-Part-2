import { useState } from 'react'
import ProductList from './components/ProductList.jsx'
import products from './product-data.json'
import Cart from './components/Cart.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([]);

  const handleUpdateCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems
          .map((item) =>
            item.name === product.name ? { ...item, quantity } : item
          )
          .filter((item) => item.quantity > 0);
      }
      if (quantity > 0) {
        return [...prevItems, { ...product, quantity }];
      }
      return prevItems;
    });
  };

  const handleRemoveFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.name !== item.name)
    );
  };

  return (
    <>
    <div className= "App">
        <h1>Desserts</h1>
      <ProductList products={products}
                   onUpdateCart={handleUpdateCart}
                   cartItems={cartItems} />
    </div>
    <div className="cart">
    <Cart items={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
    </>
  )
}

export default App;