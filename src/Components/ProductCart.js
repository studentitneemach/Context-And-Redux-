import React, { useContext } from "react";
import './ProductCart.css';
import  formatCurrency from '../util';
import Rating from "./Rating";
import CartContext from "../Context/Cart/CartContext";

const ProductCart =({product})=>{
 const {addToCart } = useContext(CartContext)
 
    return (
        <div className="productCard__wrapper">
            <div>
                <img className="productCard__img" src={product.image} alt={product._id} />
                <h4>{product.name}</h4>
                <div className="ProductCard__price">
                    <h5>{formatCurrency (product.price)}</h5>
                </div>
                <div className="ProductCard__Rateing">
        <Rating 
        value={product.rating}
        text ={`${product.numReviews} reviews`}
        />
                </div>
                <button className="ProductCard__button"
                onClick={()=>addToCart(product)}
                >Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCart;