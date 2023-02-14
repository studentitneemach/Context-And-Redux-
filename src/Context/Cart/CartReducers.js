import React from 'react';
import {SHOW_HIDE_CART , ADD_TO_CART , REMOVE_ITEM } from '../Types';

const CartReducer =(state,action)=>{
switch(action.type){
    case ADD_TO_CART  : {
        console.log(state.cartItems)

        return {
            ...state ,
            cartItems : [...state.cartItems , action.payload]
        }
    }

    case SHOW_HIDE_CART : {
        return {
            ...state ,
            showCart : !state.showCart
        }
    }
    
    case REMOVE_ITEM : {
        return {
            ...state ,
            cartItems : state.cartItems.filter(
                (item) => item._id !== action.payload
            )
        }
    }
    
    default : {
        return state;
    }
}
}
export default CartReducer;