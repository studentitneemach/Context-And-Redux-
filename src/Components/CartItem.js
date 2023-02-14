import React, { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import './CartItem.css';
// import formatCurrency from "../util";
import formatCurrency from 'format-currency';

const CartItem =({item})=>{
    const {removeItem} = useContext(CartContext);
    return <li className="CartItem__item">
<img src={item.image} alt="" />
<div>
    {item.name} 
    {formatCurrency(`${item.price}`)}
</div>
<button className="CartItem__button" onClick={()=>removeItem(item._id)}>Remove To Cart</button>
    </li>
}
export default CartItem;