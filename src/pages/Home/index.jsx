import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Card} from 'antd'
import Product from '../../components/Product'
import axios from 'axios'
import {productsList} from '../../actions/productActions'
import {useDispatch,useSelector} from 'react-redux'
import { Skeleton } from 'antd'
export default function Home() {

  const dispatch=useDispatch()
  const p=useSelector((state)=>state.productsList)
  console.log("1",p)
  const {loading,error,products}=p
  console.log(p)
  useEffect(()=>{
    dispatch(productsList())
  },[dispatch])
  
  
  return (
    <div>
      <h1>最新产品</h1>
      {
        loading?
            <Skeleton active></Skeleton>
        :<Row gutter={[50,30]}>
          {
             products?products.map(product =>{
               return  <Col key={product._id} span={6}>
                   <Link to={`/products/${product._id}`}>
                   <Product  product={product}></Product>
                   </Link>
                 </Col>
             }) :" "
          }
         </Row>
        
      }
    </div> 
  )
}
