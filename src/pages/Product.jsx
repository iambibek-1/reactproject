import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import { ShopContext } from '../context/ShopContext';

 const Product = () => {
  const {all_product} =  useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  
  return (
    <div>
    <Breadcrum product={product}/>
    <ProductDisplay product ={product}/>
    </div>
  )
}
export default Product;
