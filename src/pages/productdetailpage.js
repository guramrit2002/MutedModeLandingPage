import React from "react";
import '../style/product.css'
import { useNavigate } from 'react-router-dom';
function ProductDetail(){
    const navigate = useNavigate()
    return(
        <div className="single-product-container">
        <div className="product-images">
        <div className="slected-image">
        </div>
        <div className="other-images">
        </div>
        <div className="product-about">
        <div className="product-text">
        </div>
        <div className="product-btn">
        </div>
        </div>
        </div>
        </div>
    )
}

export default ProductDetail