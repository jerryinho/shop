import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <div className="cart-info">
                <Link to="/cart">Cart ({cartCount})</Link>
            </div>
        </nav>
    )
}

export default Navbar;
