import React from 'react'
import CartProduct from '../component/CartProduct'
import { useGlobalContext } from "../context"

const Cart = () => {
    const { totalProduct, totalPrice, initialCart, clearCart } = useGlobalContext();
    if(totalProduct === 0) {
        return <div className="cart-detail">
            <h1>Your cart is empty</h1>
        </div>
    }

    return (
        <div className="cart-detail">
            <h1>YOUR PRODUCT</h1>
            {
                initialCart.map((item, index) => {
                    return <CartProduct key={index} {...item}/>
                })
            } 
            <hr/>
            <br/>
            <div className="total">
                <p className="total-text">Total: {totalProduct} products</p>
                <p className="total-price">${totalPrice}</p>
            </div>
            <div className="clear">
                <button onClick={() => clearCart()}>CLEAR CART</button>
            </div> 
        </div>
    );
}

export default Cart;