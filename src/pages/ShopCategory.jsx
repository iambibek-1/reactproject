import React ,{useContext}from 'react'
import { ShopContext } from '../context/ShopContext'
import './CSS/ShopCategory.css'
import dropdown_icon from '../components/assets/dropdown.png'
import AllProduct from '../components/AllProduct/allproduct'

const ShopCategory = (props) => {
  const {all_product}=  useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-16
          </span>
          out of 48 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return<AllProduct key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
  
}
export default ShopCategory
