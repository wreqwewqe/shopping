import React,{useEffect} from 'react'
import { Radio,Button } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import {paymentMethod} from '../../../../actions/cartAction'
export default function PaymentMethod() {
    const cart =useSelector(state=>state.cart)
    const [value, setValue] = React.useState(cart.paymentMethod);
    console.log("cart:",cart)
    const dispatch=useDispatch()
    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    const handleSave=(value)=>{
        console.log(value)
        dispatch(paymentMethod(value))
    }
  return (
    <div style={{textAlign: 'center'}}>
        <h1>选择支付方式</h1>
        <br />
        <div>
        <Radio.Group onChange={onChange}   value={value}>
        <Radio value='微信' >微信</Radio>
        <Radio value='支付宝' >支付宝</Radio>
        </Radio.Group>
        </div>
        <br />
        <div>
        <Button onClick={()=>{handleSave(value)}} type="primary" >保存</Button>
        </div>
    </div>
  )
}
