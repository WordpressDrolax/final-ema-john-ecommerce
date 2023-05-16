import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {

const [products,setproducts]=useState([]);
useEffect(()=>{
fetch('products.json')
.then(res=>res.json())
.then(data=>setproducts(data))

},[])



    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                products.map(product=><Product></Product>)
               }
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Shop;