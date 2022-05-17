import React,{useEffect} from 'react'
import { Form, Input, Button, Checkbox,Row,Col,message } from 'antd';
import {useDispatch,useSelector} from 'react-redux'
import {updateUser} from '../../actions/userAction'
import axios from 'axios'
export default function Admin() {
    const [form] = Form.useForm();
    const dispatch=useDispatch()
    const {userInfo:{token,user}}=useSelector(state=>state.login) 
    console.log(token)
    console.log(user)
    const onFinish = async(values) => {
        console.log(values)
        dispatch(updateUser(values))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <h2>个人信息</h2>
            <Form
            form={form}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="名字"
                name="name"
                initialValue={user.name}
                rules={[
                {
                    required: true,
                    message: '请输入名字!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="邮箱"
                name="email"
                initialValue={user.email}
                rules={[
                {
                    required: true,
                    message: '请输入邮箱!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
                rules={[
                {
                    required: true,
                    message: '请输入密码!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                更新
                </Button>
            </Form.Item>
            </Form>
        </div>
    )
}
