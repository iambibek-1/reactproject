import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const {product}= props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    <div className="productdisplay-right"></div>
    </div>
  )
}

export default ProductDisplay