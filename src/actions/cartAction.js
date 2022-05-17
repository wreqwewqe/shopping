import axios from 'axios';
import {message} from 'antd'
//添加到购物车
export const addToCart=(id,count)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`/api/v1/product/${id}`)
    console.log(data)
    dispatch({type:"CART_ADD",payload:{...data,count}})
    console.log('获得:',getState().cart)
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.items))
  
}
//移除商品
export const removeGood=(_id)=>async (dispatch,getState) => {
    console.log('dispatch1')
    dispatch({type:"CART_REMOVE",payload:_id})
    console.log('dispatch3')
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.items))
}
//保存收货地址
export const saveReceiveInfo=(data)=>(dispatch)=>{
    dispatch({type:'CART_RECEIVEINFO',payload:data})
    localStorage.setItem('receiveInfo',JSON.stringify(data))
    message.success('保存成功')
}
//保存支付方式
export const paymentMethod=(data)=>async(dispatch)=>{
    dispatch({type:'CART_PAYMENT_METHOD',payload:data})
    localStorage.setItem('paymentMethod',JSON.stringify(data))
}