import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { List, Typography, Divider,Row,Col,Button,message } from 'antd';
import  './index.less'
import {orderCreate} from '../../../../actions/orderAction'
export default function PlaceOrder({history}) {
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.cart)
    const order=useSelector(state=>state.order)
    console.log('order:',order)
    const receiveInfo=cart.receiveInfo
    const paymentMethod=cart.paymentMethod
    const cartItems=cart.items
    
    const data=cartItems.map(cartItem=>
        <Row>
            <Col span={4}><img style={{width:'40px',maxHeight:"40px"}} src={cartItem.image} alt="" /></Col>
            <Col span={10}>{cartItem.name}</Col>
            <Col  span={4}>{cartItem.count}X{cartItem.price}={cartItem.count*cartItem.price}</Col>
        </Row>)
    cart.productPrice=cartItems.reduce((total,current)=>{
        return total+=current.count*current.price
    },0)
    cart.freight=cart.productPrice>100?0:6
    cart.totalPrice=cart.productPrice+cart.freight
    const priceData=[
        <div>产品总价：¥{cart.productPrice}</div>,
        <div>运费：¥{cart.freight}</div>,
        <div>订单总价：¥{cart.totalPrice}</div>
    ]
    console.log("cart:",cart)
    const handleSubmit=()=>{
        dispatch(orderCreate(cart))
        // if(order.success){
        //     message.success('创建订单成功')
        //     history.push(`/order/${order.data._id}`)
        // }else{
        //     message.error(order.error)
        // }
    }
  return (
    <div className="placeOrderContainer">
        <div className='orderDetail'>
            <h2>收货地址</h2>
            <div><strong>收件人地址:</strong>{receiveInfo.province},{receiveInfo.region},{receiveInfo.address},{receiveInfo.postalCode}</div>
            <br />
            <br />
            <h2>支付方式</h2>
            <div><strong>支付方法:</strong>{paymentMethod}</div>
            <br />
            <br />
            <h2>产品订单</h2>
            <div>
                <List
                    size="large"
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        </div>
        <div className='orderPrice' >
            <List
                size="large"
                bordered
                footer={<Button onClick={()=>{handleSubmit()}} type="primary">提交订单</Button>}
                header={<h2>订单详情</h2>}
                dataSource={priceData}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </div>
    </div>
  )
}
