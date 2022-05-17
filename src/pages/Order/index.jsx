import React from 'react'
import { Steps, Button, message } from 'antd';
import './index.less'
import Register from '../Register'
import {useDispatch,useSelector} from 'react-redux'
import ReceiveInfo from './componets/ReceiveInfo'
import PaymentMethod from './componets/PaymentMethod';
import PlaceOrder from './componets/PlaceOrder';
export default function Order() {
    const dispatch=useDispatch()
    const { Step } = Steps;
    const [current, setCurrent] = React.useState(0);
    const cart=useSelector(state=>state.cart)
    console.log("cc:",cart)
    const receiveInfo=cart.receiveInfo||{}
    const next = () => {
        if(Object.keys(receiveInfo).length===4)
        setCurrent(current + 1);
        else{
          message.error('请填写地址')
        }
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const steps = [
        {
            title: '填写收货地址',
            content:<ReceiveInfo></ReceiveInfo>,
        },
        {
            title: '选择支付方式',
            content: <PaymentMethod></PaymentMethod>,
        },
        {
            title: '确认订单',
            content: <PlaceOrder></PlaceOrder>,
        },
    ];
    
  return (
    <div>
        <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button  type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
      </div>
    </div>
  )
}
