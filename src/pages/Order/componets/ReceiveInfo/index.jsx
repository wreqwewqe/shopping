import React,{useEffect} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {useSelector,useDispatch} from 'react-redux'
import {saveReceiveInfo} from '../../../../actions/cartAction'
export default function ReceiveInfo() {
    const cart=useSelector(state=>state.cart)
    const receiveInfo=cart.receiveInfo||{}
    console.log(cart)
    const dispatch=useDispatch()
    const [form]=Form.useForm()
    useEffect(()=>{
        form.setFieldsValue(receiveInfo)
    },[])
    const onFinish=(values)=>{
        dispatch(saveReceiveInfo(values))
    }
  return (
    <div>
        <h2>收货地址</h2>
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8}}
            initialValues={{ remember: true }}
            onFinish={(values)=>{onFinish(values)}}
            onFinishFailed={()=>{}}
            autoComplete="off"
        >
        <Form.Item
            label="详细地址"
            name="address"
            rules={[{ required: true, message: '请输入地址!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="所在地区"
            name="region"
            rules={[{ required: true, message: '请输入地区!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="邮政编码"
            name="postalCode"
            rules={[{ required: true, message: '请输入邮政编码!' }]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            label="省份"
            name="province"
            rules={[{ required: true, message: '请输入省份!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
        </Form>
    </div>
  )
}
