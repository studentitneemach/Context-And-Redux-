import React from "react";
import ProductCart from "../Components/ProductCart";
import Product from '../data';
import './HomeScreen.css';

const HomeScreen=()=>{
    return (
        <div className="products__wrapper">
            {
                Product.map((product) => <ProductCart 
                key={product._id} 
                product = {product}
                />  )
            }
        </div>
    )
}

export default HomeScreen;