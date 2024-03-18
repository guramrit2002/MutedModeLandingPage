// SalesBanner.js
import React from 'react';

function SalesBanner() {
    const sale = new Array(8).fill('SALE!!!')
  return (
    <div className='sale-banner'>
      {sale.map((item,index)=>{
        return(
        <h1 key ={index} className='sale'>
        {item}   
        </h1>     
  )})}
      
    </div>
  );
}

export default SalesBanner;
