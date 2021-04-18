import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from "../context"

const Navbar = () => {
    const {totalProduct} = useGlobalContext();
    return (
        <header>
            <div className="home">
                <Link to="/">
                    Home
                </Link>
            </div>
            <div className="admin">
                <Link to="/admin">
                    Admin
                </Link>
            </div>
            <div className="cart">
                <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="number-products">{totalProduct}</span>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;