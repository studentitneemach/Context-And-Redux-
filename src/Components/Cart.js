import React, { useContext } from "react";
import './Cart.css';
// import formatCurrency from '../util';
import formatCurrency from 'format-currency'
import CartContext from "../Context/Cart/CartContext";
import CartItem from "./CartItem";

const Cart =()=>{
    const {showCart,cartItems,showHideCart} =useContext(CartContext);
return (
<>
{showCart && (
    <div className="cart__wrapper"> 
<div style={{textAlign : 'right'}}>
    <i style={{cursor : 'pointer'}} 
    className="fa fa-time-circle"
    aria-hidden ="true" 
    onClick={showHideCart}
    ></i>
</div>
<div className="cart__innerWrapper">
{ cartItems.length === 0 ? (
<h4>Cart is Empty</h4> 
) : (
    <ul>
        {
            cartItems.map((cart)=> (
                <CartItem 
                key = {cart._id}
                item ={cart}
                />
            ))
        }
    </ul>

  )}
</div>

<div className="Cart__cartTotal">
<div>Cart Total</div>
</div>
    </div>
)}
<div style={{marginLeft : 5 }}>
 {formatCurrency(cartItems.reduce((amount,item) =>  item.price + amount, 0 ))}
</div>
</>
)
}

export default Cart;