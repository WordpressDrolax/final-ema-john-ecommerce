import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const { name, id, price, img ,seller,ratings} = props.product;

    return (
      
        <div className='production-wrapper'>
         <div> 
            <img src={img} alt="" />

            
            <div className='top-info'> 
            <p>{name}</p>
            <p>Price:{price}</p>
            </div>
         </div>
         <div className='product-info'> 

            <p>Sellar:{seller}</p>
            <p>Rating:{ratings}</p>
         </div>

         <button className='btn-cart'> Add to Cart</button>
        </div>
        
        
        
    );
};

export default Product;