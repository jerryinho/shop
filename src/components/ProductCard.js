import React, { useState} from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart}) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity (quantity + 1);
    const handleDecrement = () => setQuantity (quantity -1);
    const handleChange = (e) => setQuantity(Number(e.target.value));

    return (
        <div className="product-card">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div className="quantity-controls">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} onChange={handleChange} min="1" />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
        </div>
      );

}
export default ProductCard;


