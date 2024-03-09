import React from 'react';
import {Route, Routes} from 'react-router-dom';



const Product = ({id, title, description, price, discountPercentage, rating, stock, brand, thumbnail}) => {

  return (

    <div key={id}>
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
      <p>Discount Percentage: ${discountPercentage}</p>
      <p>Rating: ${rating}</p>
      <p>Stock: ${stock}</p>
      <p>Brand: {brand}</p>
      <img src={thumbnail} alt={title}/>

    </div>
    
  )


}


export default Product;