import React,{useEffect,useState} from 'react'
import products from '../../product'
import {Button,Row,Col, List, Typography, Divider,Skeleton,InputNumber} from 'antd'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {productDetail} from '../../actions/productActions'
export default function ProductDetails(props) {
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(productDetail(props.match.params.id))
    },[])
    const detail=useSelector(state=>state.productDetail)
    const [count,setCount]=useState(1)
    const {product,loading}=detail
    
    const data = [
        <div>评分:{product.rate}</div>,
        <div>评论数:{product.numReviews}</div>,
        <div>价格:¥{product.price}</div>,
        <div>描述:{product.description}</div>,
      ];
  return (
    <div>
        <Link to='/'>返回主页</Link>
        {
            loading?<Skeleton active></Skeleton>:
            <Row gutter={[80,0]}>
                <Col  span={12}>
                    <img style={{maxWidth:"100%", maxHeight:"100%"}} src={product.image} alt="" />
                </Col>
                <Col span={6}>
                <List
                    header={<h2>{product.name}</h2>}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                        <Typography.Text mark></Typography.Text> {item}
                        </List.Item>
                    )}
                />
                </Col>
                <Col span={6}>
                    <List
                        bordered
                        dataSource={[
                            <div>价格:{product.price}</div>,
                            <div>库存:{product.countInStock}</div>,
                            <div>数量：<InputNumber defaultValue={1} min={1} max={product.countInStock}
                             onChange={async(value)=>{setCount(value)}}></InputNumber></div>,
                            <Button onClick={()=>{props.history.push(`/cart/${product._id}?count=${count}`)}} disabled={product.countInStock===0}  type='primary' >加入购物车</Button>
                        ]}
                        renderItem={item => (
                            <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        }
    </div>
  )
}
