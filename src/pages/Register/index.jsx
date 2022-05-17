import React from 'react'
import { Form, Input, Button, Checkbox,message } from 'antd';
import axios from 'axios'
export default function Register({history}) {
    const onFinish = (values) => {
        axios.post('/api/v1/user/register',{
            name:values.name,email:values.email,password:values.password
        }).then(res=>{
            if(res.data.msg==='创建成功')
            {
                message.success(res.data.msg)
                history.push('/login')
            }
            else{
                message.error(res.data.msg);
            }
        })
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      
  return (
    <div>
         <Form
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
        label="姓名"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入姓名!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          {
            required: true,
            message: '请输入邮箱!',
          },
        ]}
      >
        <Input/>
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
          注册
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}
