import React,{useEffect} from 'react'
import { Form, Input, Button,Row,Col,message } from 'antd';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {userLogin} from '../../actions/userAction'
export default function Login({history}) {
    const dispatch=useDispatch()
    const {userInfo}=useSelector(state=>state.login)
    useEffect(()=>{
        if(Object.keys(userInfo).length!==0){
            console.log(userInfo)
            history.push('/')
        }
    },[])
    const onFinish=(values)=>{
        console.log(values)
        dispatch(userLogin(values.username,values.password,history))
    }
    const onFinishFailed=()=>{

    }

  return (
    
    <div>
        <h2>登陆</h2>
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
            <Form.Item
                label="邮箱"
                name="username"
                rules={[{ required: true, message: '请输入邮箱！' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                登陆
                </Button>
            </Form.Item>
        </Form>
        <Row>
            <Col  push={8}><Link to='/register'>没有账号？去注册</Link></Col>
        </Row>
    </div>
  )
}
