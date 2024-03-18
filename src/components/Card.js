// Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({product}) {
    const {id,name,price} = product
    const navigate = useNavigate()
    return (
        <div className='product-card' onClick={()=>navigate('/singleproduct')}>
            <div className='product-img'>
                <div className='sale-tag'>
                    <p>SALE!!</p>
                </div>
            </div>
            <div className='product-detail'>
                <h4>{name}</h4>
                <p>Rs {price}</p>
            </div>
        </div>
    )
}


export default Card;
