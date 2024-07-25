import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cart, incrementQuantity, decrementQuantity, removeFromCart }) => {
  return (
    <div className="cart-page">
      <Cart
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default CartPage;

