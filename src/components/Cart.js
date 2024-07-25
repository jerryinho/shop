import React from 'react';
import '../styles/Cart.css'

const Cart = ({ cart, incrementQuantity, decrementQuantity, removeFromCart }) => {
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <input type="number" value={item.quantity} readOnly />
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <p className="item-total">Price: ${item.price * item.quantity}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

