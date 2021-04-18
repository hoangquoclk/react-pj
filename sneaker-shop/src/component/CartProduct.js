import React from 'react'
import {useGlobalContext} from '../context'

const CartProduct = ({id, name, image, price, quantity}) => {
    const {changeNumberProduct, removeCartItem} = useGlobalContext();
    return (
        <div className="item">
            <img src={image} 
            alt={name} />
            <div className="info">
                <p className="name">{name}</p>
                <p className="price">${price}</p>
                <button className="delete" onClick={() => removeCartItem(id)}>Remove</button>
            </div>
            <div className="interact">
                <i className="fas fa-chevron-up" onClick={() => changeNumberProduct(id, "inc")}></i>
                <div className="number">{quantity}</div>     
                <i className="fas fa-chevron-down" onClick={() => changeNumberProduct(id, "dec")}></i>
                <div className="total-price">${price * quantity}</div>
            </div>
        </div>
    );
}

export default CartProduct;